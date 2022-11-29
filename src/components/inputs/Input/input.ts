import Block from '../../../utils/Block';
import template from './input.hbs';
import * as styles from './input.scss';

interface InputProps {
  type: string,
  name: string,
  id: string,
  disabled?: boolean,
  placeholder?: string,
  value?: string
  events?: {
    blur?: (event: FocusEvent & { target: HTMLInputElement }) => void;
    focus?: (event: FocusEvent & { target: HTMLInputElement }) => void;
  }
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  protected init() {
    this.setProps({ styles });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
