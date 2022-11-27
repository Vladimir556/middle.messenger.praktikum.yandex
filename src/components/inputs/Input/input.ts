import Block from "../../../utils/Block";
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
  events?: {
    input?: (event: Event) => void;
    blur?: (event: Event) => void;
    focus?: (event: Event) => void;
  }
}

export class Input extends Block{
  constructor(props: InputProps, className: string = 'text-input') {
    super('div', props, className);
  }

  protected init() {
    this.setProps({styles})
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }

}