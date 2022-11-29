import Block from '../../../utils/Block';
import template from './messageInput.hbs';
import * as styles from "./messageInput.scss"

interface MessageInputProps {
  name: string,
  id: string,
  placeholder?: string,
  value?: string
  events?: {
    input: (event?: InputEvent & { target: HTMLTextAreaElement }) => void
  }
}

export class MessageInput extends Block {
  constructor(props: MessageInputProps) {
    super(props);
  }

  protected init() {
    this.setProps({styles})
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
