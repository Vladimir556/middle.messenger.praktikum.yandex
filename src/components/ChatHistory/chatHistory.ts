import Block from '../../utils/Block';
import template from './chatHistory.hbs';
import * as styles from './chatHistory.scss';

interface Message {
  type: string,
  time: string,
  text: string
}

interface ChatHistoryProps {
  messages: Message[]
}

export class ChatHistory extends Block {
  constructor(props: ChatHistoryProps) {
    super(props);
  }

  protected init() {
    this.setProps({ styles });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
