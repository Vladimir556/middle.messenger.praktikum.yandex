import Block from "../../../utils/Block";
import template from "./messageInput.hbs";

interface MessageInputProps{
  name: string,
  id: string,
  placeholder?: string,
  value?: string
}

export class MessageInput extends Block{
  constructor(props: MessageInputProps, className?: string) {
    super('div', props, className);
  }

  protected init() {
    super.init();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}