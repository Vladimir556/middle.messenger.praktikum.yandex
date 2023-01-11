import Block from '../../../utils/Block';
import template from './ContextButton.hbs';
import * as styles from './ContextButton.scss';

interface ContextButtonProps {
  img: any;
  class?: string;
  events?:{
    click?: (event?: Event) => void;
  }
}

export class ContextButton extends Block {
  constructor(props?: ContextButtonProps) {
    super({
      ...props
    });
  }

  protected init() {
    super.init();
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props, styles})
  }
}
