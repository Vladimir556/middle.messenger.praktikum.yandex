import Block from "../../utils/Block";
import template from "./input.hbs";
import * as styles from "./input.scss";

interface InputProps{
  className?: string,
  labelText?: string,
  type: string,
  name: string,
  id: string,
  disabled?: boolean,
  placeholder?: string,
  value?: string
}

export class Input extends Block{
  constructor(props: InputProps) {
    super('div', props);
  }

  protected init() {
    this.setProps({styles})
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }

}