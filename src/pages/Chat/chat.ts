// base
import Block from '../../utils/Block';
import template from './chat.hbs';

// styles
import * as styles from './chat.scss';

// assets
import arrowSVG from '../../static/arrow.svg';
import clipSVG from '../../static/grayClip.svg';
import contextMenuSVG from '../../static/contextMenu.svg';

import photoVideoSVG from '../../static/menuSvg/fotoVideo.svg';
import locationSVG from '../../static/menuSvg/location.svg';
import fileSVG from '../../static/menuSvg/file.svg';

import addUserSVG from '../../static/menuSvg/addUser.svg';
import delUserSVG from '../../static/menuSvg/delUser.svg';
import delChatSVG from '../../static/menuSvg/delChat.svg';

// components
import { ChatList, ChatListProp } from '../../components/ChatList/chatList';
import { MessageInput } from '../../components/inputs/MessageInput/messageInput';
import { LabeledInput } from '../../components/inputs/Input/LabeledInput/labeledInput';
import { ChatHistory } from '../../components/ChatHistory/chatHistory';
import { Link } from '../../components/buttons/Link/link';

// utils
import { Routes } from '../../constants/routes';
import { autoSizeTextArea } from '../../utils/helpers/autoSizeTextArea';

// controllers
import ChatController from '../../controllers/ChatController';
import userController from '../../controllers/UserController';
import AuthController from '../../controllers/AuthController';

// hocs
import { withStore } from '../../utils/Store';
import router from '../../utils/Router';
import { ContextButton } from '../../components/buttons/ContextButton/ContextButton';
import { ContextMenu } from '../../components/ContextMenu/ContextMenu';
import MessagesController from '../../controllers/MessagesController';
import { ControlLink } from '../../components/buttons/Link/ControlLink/ControlLink';

export class ChatPageBase extends Block {
  createChatHandler(event: Event) {
    const element = event.target as HTMLElement;
    const { title, id } = element.dataset;
    console.log(title, id);
    console.log(this.props);
    ChatController.createChat({ title: `чат ${title} / ${this.props.user.login}` }).then((chat) => {
      this.updateChatListHandler();
      ChatController.addUserToChat({ chatId: chat.id, users: [Number(id)] });
    });
  }

  openChatHandler(event: Event) {
    const element = event.target as HTMLElement;
    const { title, id, avatar } = element.dataset;

    ChatController.selectChat({
      title: title as string,
      avatar: avatar as string,
      id: Number(id)
    }).then(() => {
      (this.children.chatHistory as Block).setProps({
        userId: this.props.user.id,
        id: Number(id)
      });
      router.go(`${Routes.Messenger}#${id}`);
    });
  }

  searchUserHandler(event: InputEvent) {
    const searchQuerry = (event.target as HTMLInputElement).value;
    if (searchQuerry) {
      userController.searchUser({ login: searchQuerry }).then((data) => {
        if (data) {
          const result: ChatListProp[] = [];

          data?.map((user) => {
            result.push({
              id: user.id,
              title: user.login,
              avatar: user.avatar
            });
          });

          (this.children.chatList as Block).setProps({
            chats: [...result],
            events: {
              click: (event: Event) => this.createChatHandler(event)
            }
          });
        }
      });
    } else {
      this.updateChatListHandler();
    }
  }

  protected init() {
    this.children.createChat = new ControlLink({
      text: 'Новый чат',
      class: 'profile__link',
      events: {
        click: () => {
          const title = prompt('Введите название чата');

          ChatController.createChat({ title: title as string }).then(() => {
            this.updateChatListHandler();
          });
        }
      }
    });

    this.children.profileLink = new Link({
      text: 'Профиль >',
      class: 'profile__link',
      href: Routes.Profile
    });

    // search input
    this.children.input = new LabeledInput({
      type: 'text',
      name: 'search',
      id: 'search',
      placeholder: 'Поиск',
      events: {
        input: (event) => this.searchUserHandler(event as InputEvent)
      }
    });

    this.children.chatList = new ChatList({
      events: {
        click: (event) => this.openChatHandler(event)
      }
    });

    this.children.contextMunuChatSettings = new ContextMenu({
      items: [
        {
          img: addUserSVG,
          text: 'Добавить пользователя',
          events: {
            click: () => {
              const userIdToAdd = prompt('Введите id пользователя');

              if (userIdToAdd) {
                ChatController.addUserToChat({
                  chatId: this.props.current.id,
                  users: [Number(userIdToAdd)]
                });
              }
            }
          }
        },
        {
          img: delUserSVG,
          text: 'Удалить пользователя',
          events: {
            click: () => {
              const userIdToDelete = prompt('Введите id пользователя');

              if (userIdToDelete) {
                ChatController.addUserToChat({
                  chatId: this.props.current.id,
                  users: [Number(userIdToDelete)]
                });
              }
            }
          }
        },
        {
          img: delChatSVG,
          text: 'Удалить чат',
          events: {
            click: () => {
              const confirmMsg = confirm('Вы действительно хотите удалить чат ?');
              if (confirmMsg) {
                ChatController.deleteChat({
                  chatId: this.props.current.id
                });
                this.updateChatListHandler();
              }
            }
          }
        }
      ]
    });

    this.children.contextButtonMenu = new ContextButton({
      img: contextMenuSVG,
      class: 'chat-title__context-button',

      events: {
        click: (event) => {
          (this.children.contextMunuChatSettings as Block).setProps({
            positionX: (event?.currentTarget as HTMLElement).getClientRects()[0].x - 200,
            positionY: (event?.currentTarget as HTMLElement).getClientRects()[0].y + 25,
            active: true
          });
        }
      }
    });

    this.children.contextMunuMessage = new ContextMenu({
      items: [
        {
          img: photoVideoSVG,
          text: 'Фото или Видео',
          events: {
            click: () => {
              console.log('Фото или Видео');
            }
          }
        },
        {
          img: fileSVG,
          text: 'Файл',
          events: {
            click: () => {
              console.log('Файл');
            }
          }
        },
        {
          img: locationSVG,
          text: 'Локация',
          events: {
            click: () => {
              console.log('Локация');
            }
          }
        }
      ]
    });

    this.children.clipButton = new ContextButton({
      img: clipSVG,
      class: 'button clip-button',

      events: {
        click: (event) => {
          (this.children.contextMunuMessage as Block).setProps({
            positionX: (event?.currentTarget as HTMLElement).getClientRects()[0].x,
            positionY: (event?.currentTarget as HTMLElement).getClientRects()[0].y - 150,
            active: true
          });
        }
      }
    });

    this.children.sendMsgButton = new ContextButton({
      img: arrowSVG,
      class: 'button send-button',

      events: {
        click: (event) => {
          const message: HTMLTextAreaElement = document.querySelector('#message') as HTMLTextAreaElement;
          MessagesController.sendMessage(this.props.current.id, message.value);
          message.value = '';
        }
      }
    });

    this.children.chatHistory = new ChatHistory({});

    this.children.messageInput = new MessageInput({
      name: 'message',
      id: 'message',
      placeholder: 'Сообщение',
      events: {
        input: (event) => autoSizeTextArea(event!)
      }
    });

    this.updateChatListHandler();
  }

  updateChatListHandler() {
    AuthController.fetchUser();

    ChatController.fetchChats().then(() => {
      // refresh chatList
      (this.children.chatList as Block).setProps({
        chats: this.props.chats,
        events: {
          click: (event: Event) => this.openChatHandler(event)
        }
      });

      // clear search input
      (this.children.input as Block).setProps({
        value: ''
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles,
      arrowSVG,
      clipSVG,
      contextMenuSVG
    });
  }
}

const withChats = withStore((state) => ({ ...state.chats, user: { ...state.user } }));

export const ChatPage = withChats(ChatPageBase);
