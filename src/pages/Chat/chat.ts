import Block from '../../utils/Block';
import template from './chat.hbs';
import * as styles from './chat.scss';
import {ChatList} from '../../components/ChatList/chatList';
import {MessageInput} from '../../components/inputs/MessageInput/messageInput';
import arrowSVG from './../../static/arrow.svg'
import clipSVG from './../../static/grayClip.svg'
import contextMenuSVG from './../../static/contextMenu.svg'
import {autoSizeTextArea} from "../../utils/autoSizeTextArea";
import {LabeledInput} from "../../components/inputs/Input/LabeledInput/labeledInput";

interface ChatPageProps{
  profileName: string,
  profileImgUrl: string
}

export class ChatPage extends Block{
  constructor(props: ChatPageProps) {
    super(props);
  }

  protected init() {
    this.setProps({styles, arrowSVG, clipSVG, contextMenuSVG})


    this.children.input = new LabeledInput({
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
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },
        {
          name: 'Tom',
          time: '10:30',
          lastMessage: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.',
          unreadCount: '10'
        },

      ]
    })
    
    this.children.messageInput = new MessageInput({
      name: 'message',
      id: 'message',
      placeholder: 'Сообщение',
      events: {
        input: (event) => autoSizeTextArea(event!)
      }
    })

  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}