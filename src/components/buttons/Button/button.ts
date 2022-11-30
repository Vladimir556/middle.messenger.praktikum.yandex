import Block from '../../../utils/Block';
import template from './button.hbs';
import * as styles from './button.scss';

interface ButtonProps {
  text: string,
  events?:{
    click?: (event?: Event) => void
  }
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  protected init() {
    this.setProps({ styles });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
