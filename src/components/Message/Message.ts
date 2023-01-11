import Block from '../../utils/Block';
import template from './message.hbs';
import * as styles from './Message.scss';

interface MessageProps {
  content: string;
  isMine: boolean;
  time: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
