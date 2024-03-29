// base
import Block from '../../utils/Block';
import template from './chatList.hbs';

// styles
import * as styles from './chatList.scss';
import { UserInfo } from '../../types/interfaces';
import { withStore } from '../../utils/Store';

interface LastMessage {
  user: UserInfo;
  time: string;
  content: string;
}

export interface ChatListProp {
  id?: number;
  title?: string;
  avatar?: string | null;
  unread_count?: number;
  last_message?: LastMessage | null;
}

export interface ChatListProps {
  chats?: ChatListProp[];
  events?: {
    click: (event: Event) => void;
  }
}

export class ChatListBase extends Block {
  constructor(props?: ChatListProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}

const withChats = withStore((state) => ({ ...state.chats }));

export const ChatList = withChats(ChatListBase);
