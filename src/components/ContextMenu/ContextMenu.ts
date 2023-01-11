import Block from '../../utils/Block';
import template from './ContextMenu.hbs';
import * as styles from './ContextMenu.scss'
import { ContextMunuItem, ContextMunuItemProps } from './ContextMunuItem/ContextMunuItem';


interface ContextMenuProps {
  items: ContextMunuItemProps[];
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
          active: false
        })
      }
		});
	}

	protected init() {
    this.children.items = this.createMenuItems(this.props);
  }

  private createMenuItems(props: ContextMenuProps) {
    return props.items.map((item) => {
      return new ContextMunuItem({
        img: item.img,
        text: item.text
      })
    })
  }

  protected render(): DocumentFragment {
		return this.compile(template, {...this.props, styles})
	}
}
