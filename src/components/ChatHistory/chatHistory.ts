import Block from '../../utils/Block';
import template from './chatHistory.hbs';
import * as styles from './chatHistory.scss';
import { withStore } from '../../utils/Store';
import { Message } from '../Message/Message';

interface MessageInfo {
  id: number;
  user_id: number;
  chat_id: number;
  type: string;
  time: string;
  content: string;
  is_read: boolean;
  file: unknown | null;
}

interface ChatHistoryProps {
  messages: MessageInfo[];
  userId?: number;
  id?: number;
}

export class ChatHistoryBase extends Block {
  protected init() {
    this.children.items = this.createMessages(this.props);
  }

  protected componentDidUpdate(
    _oldProps: ChatHistoryProps,
    newProps: ChatHistoryProps,
  ): boolean {
    this.children.items = this.createMessages(newProps);
    return true;
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }

  private createMessages(props: ChatHistoryProps) {
    return props.messages?.map((msg) => {
      const isMine = msg.user_id === props.userId;
      const timeStamp = new Date(msg.time);
      const time = timeStamp.toLocaleString();
      return new Message({
        isMine,
        content: msg.content,
        time,
      });
    });
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.chats?.current?.id;
  if (selectedChatId) {
    return {
      messages: (state.messages || {})[selectedChatId] || [],
    };
  }
  return {
    messages: [],
  };
});

export const ChatHistory = withSelectedChatMessages(ChatHistoryBase);
