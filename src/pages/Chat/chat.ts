// base
import Block from '../../utils/Block';
import template from './chat.hbs';

// styles
import * as styles from './chat.scss';

// assets
import arrowSVG from '../../static/arrow.svg';
import clipSVG from '../../static/grayClip.svg';
import contextMenuSVG from '../../static/contextMenu.svg';

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

export class ChatPageBase extends Block {
	createChatHandler(event: Event) {
		const element = event.target as HTMLElement;
		const { title, id } = element.dataset;
		console.log(title, id);

		ChatController.createChat({ title: title as string }).then(() => {
			this.updateChatListHandler();
		});
	}

	openChatHandler(event: Event) {
		const element = event.target as HTMLElement;
		const { title, id, avatar } = element.dataset;

		ChatController.selectChat({
			title: title as string,
			avatar: avatar as string,
			chatId: Number(id)
		}).then(() => {
			this.children.chatHistory.setProps({
				userId: this.props.user.id,
				chatId: Number(id)
			});
      router.go(Routes.Messenger + `#${id}`)
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

					this.children.chatList.setProps({
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
			this.children.chatList.setProps({
				chats: this.props.chats,
				events: {
					click: (event: Event) => this.openChatHandler(event)
				}
			});

			// clear search input
			this.children.input.setProps({
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
