import Block from "../../utils/Block";
import template from "./chat.hbs";
import * as styles from "./chat.scss";
import * as data from "./../../constants/data.json"
import {ChatList} from "../../components/ChatList/chatList";
import {Input} from "../../components/Input/input";

interface ChatPageProps{
  profileName: string
}

export class ChatPage extends Block{
  constructor(props: ChatPageProps) {
    super('div', props);
  }

  protected init() {
    this.setProps({styles})

    console.log(data)
    this.children.input = new Input({
      type: 'text',
      name: 'search',
      id: 'search',
      placeholder: 'Поиск'
    })

    this.children.chatList = new ChatList({
      chats: [
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Привет',
          unreadCount: '10'
        }
      ]
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}