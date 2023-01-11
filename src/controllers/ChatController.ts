import API, { ChatAPI } from '../api/ChatAPI';
import store from '../utils/Store';
import { ChatsData, SelectChatData } from '../types/interfaces';
import MessagesController from './MessagesController';

export class ChatController {
	private readonly api: ChatAPI;

	constructor() {
		this.api = API;
	}

	async fetchChats() {
		try {
			const chats = await this.api.read();
			store.set('chats.chats', [...chats]);
		} catch (e: any) {
			console.error(e.message);
		}
	}

	async createChat(data: ChatsData) {
		try {
			const chat = await this.api.create(data);
			store.set('chats.current.id', chat);
		} catch (e: any) {
			console.error(e.message);
		}
	}

	async getChatToken(chatId: number) {
		try {
			const tokenData = await this.api.token(chatId);
			return tokenData.token as string;
		} catch (e: any) {
			console.error(e.message);
		}
	}

	async selectChat(data: SelectChatData) {
		try {
			const token = await this.getChatToken(data.id);
      await MessagesController.connect(data.id, token!)
			store.set('chats.current', { ...data, token});
      return { ...data, token }
		} catch (e: any) {
			console.error(e.message);
		}
	}
}

export default new ChatController();
