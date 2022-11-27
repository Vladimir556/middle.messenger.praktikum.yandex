import Block from "../../../utils/Block";
import template from "./messageInput.hbs";

interface MessageInputProps{
  name: string,
  id: string,
  placeholder?: string,
  value?: string
  events?: {
    input: (event?: InputEvent & {target: HTMLTextAreaElement}) => void
  }
}

export class MessageInput extends Block{
  constructor(props: MessageInputProps, className: string = 'message-input') {
    super('div', props, className);
  }

  protected init() {
    super.init();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}