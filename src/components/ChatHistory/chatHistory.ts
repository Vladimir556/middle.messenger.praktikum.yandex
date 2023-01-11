import Block from '../../utils/Block';
import template from './chatHistory.hbs';
import * as styles from './chatHistory.scss';
import { withStore } from '../../utils/Store';

interface Message {
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
  messages?: Message[];
  userId?: number;
  chatId?: number;
}

export class ChatHistoryBase extends Block {
  constructor(props?: ChatHistoryProps) {
    super({ ...props });
  }

  protected render(): DocumentFragment {
    console.log(this.props);
    return this.compile(template, { ...this.props, styles });
  }

}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.chats?.current?.chatId;
  if (selectedChatId) {
    return {
      messages: state.messages[selectedChatId]
    }
  }
});

export const ChatHistory = withSelectedChatMessages(ChatHistoryBase);

