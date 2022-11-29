import { nanoid } from 'nanoid';
import { EventBus } from './EventBus';

type BlockEvents<P = any> = {
  init: [];
  'flow:component-did-mount': [];
  'flow:component-did-update': [P, P];
  'flow:render': [];
};

type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;

export default abstract class Block<P extends Record<string, unknown> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  public children: Record<string, Block>;

  protected props: Props<P>;

  private eventBus: () => EventBus<BlockEvents<Props<P>>>;

  private _element: HTMLElement | null = null;

  private _meta: { props: Props<P> };

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  protected constructor(propsWithChildren: Props<P> = {} as Props<P>) {
    const eventBus = new EventBus<BlockEvents<Props<P>>>();
    this.eventBus = () => eventBus;

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      props,
    };

    this.children = children;
    this.props = this._makePropsProxy(props);

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  get element() {
    return this._element;
  }

  private _removeEvents() {
    const { events } = this.props as Props;

    if (!events || !this._element) {
      return
    }

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName])
    })
  }

  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _registerEvents(eventBus: EventBus<BlockEvents>) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected init() {}

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps: Props<P>, newProps: Props<P>) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }

    this.componentDidUpdate(oldProps, newProps);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidUpdate(oldProps: Props<P>, newProps: Props<P>) {
    return true;
  }

  public setProps = (nextProps: Partial<Props<P>>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  private _render() {
    const block = this.render();

    const newBlock = block.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newBlock);
    }

    this._element = newBlock;

    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  protected compile(template: (context: any) => string, context: any) {
    // все пропсы компонента
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
  }

  public getContent() {
    return this.element;
  }

  private _getChildrenAndProps(childrenAndProps: Props<P>): { props: Props<P>, children: Record<string, Block> } {
    const props = {} as Record<string, unknown>;
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as Props<P>, children };
  }

  private _makePropsProxy(props: Props<P>) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };

        target[prop as keyof Props<P>] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  public show() {
    this.getContent()!.style.display = 'block';
  }

  public hide() {
    this.getContent()!.style.display = 'none';
  }
}
