import Block from "../../utils/Block";
import template from "./button.hbs";
import * as styles from "./button.scss"

interface ButtonProps{
  styles: unknown,
  type: string,
  name: string,
  placeholder: string,
  value: string,
  disabled: boolean,
  text: string,
  className:string,
  href: string
}

export class Button extends Block{
  constructor(props: ButtonProps) {
    super('button', props);
  }

  protected init() {
    this.setProps({styles})
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}