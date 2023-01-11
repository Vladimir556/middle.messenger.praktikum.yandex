import Block from '../../../utils/Block';
import template from './ContextMenuItem.hbs';
import * as styles from './ContextMenuItem.scss';

export interface ContextMunuItemProps {
  img: any,
  text: string

  events?: {
    click?: (event: Event) => void;
  }
}

export class ContextMunuItem extends Block {
  constructor(props: ContextMunuItemProps) {
    super({
      ...props,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
