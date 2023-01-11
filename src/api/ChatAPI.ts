import BaseAPI from './BaseAPI';
import { ChatsData, ChatsUsersData, DeleteChatData } from '../types/interfaces';

export class ChatAPI extends BaseAPI {
	constructor() {
		super('/chats');
	}

	read() {
		return this.http.get('');
	}

	create(data: ChatsData) {
		return this.http.post('', { data });
	}

	delete(data: DeleteChatData) {
		return this.http.delete('', { data });
	}

	addUsers(data: ChatsUsersData) {
		return this.http.put('/users', { data });
	}

	deleteUsers(data: ChatsUsersData) {
		return this.http.delete('/users', { data });
	}

	token(chatId: number) {
		return this.http.post(`/token/${chatId}`);
	}

	update = undefined;
}

export default new ChatAPI();
