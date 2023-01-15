import Block from '../../utils/Block';
import template from './ContextMenu.hbs';
import * as styles from './ContextMenu.scss';
import { ContextMenuItem, ContextMenuItemProps } from './ContextMunuItem/ContextMenuItem';

interface ContextMenuProps {
  items: ContextMenuItemProps[];
  positionX?: number;
  positionY?: number;
  active?: boolean;

  events?: {
    mouseleave?: (event: Event) => void;
  }
}

export class ContextMenu extends Block {
  constructor(props: ContextMenuProps) {
    super({
      ...props,
      events: {
        mouseleave: () => this.setProps({
          active: false,
        }),
      },
    });
  }

  protected init() {
    this.children.items = this.createMenuItems(this.props);
  }

  private createMenuItems(props: ContextMenuProps) {
    return props.items.map((item) => new ContextMenuItem({
      img: item.img,
      text: item.text,
      events: item.events,
    }));
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
