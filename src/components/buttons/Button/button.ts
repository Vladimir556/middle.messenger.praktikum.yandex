import Block from "../../../utils/Block";
import template from "./button.hbs";
import * as styles from "./button.scss"

interface ButtonProps{
  text: string,
}

export class Button extends Block{
  constructor(props: ButtonProps, className: string = 'button') {
    super('button', props, className);
  }

  protected init() {
    this.setProps({styles})
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}