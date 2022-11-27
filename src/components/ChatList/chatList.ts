import Block from "../../utils/Block";
import template from "./chatList.hbs";
import * as styles from "./chatList.scss";

interface ChatListProp{
  name: string
  time: string,
  lastMessage: string,
  unreadCount?: string
}

interface ChatListProps{
  chats: ChatListProp[]
}

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super(props);
  }

  protected init() {
    this.setProps({styles})
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}