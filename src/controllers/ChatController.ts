import API, { ChatAPI } from '../api/ChatAPI';
import store from '../utils/Store';
import {
  ChatsData,
  ChatsUsersData,
  DeleteChatData,
  SelectChatData,
} from '../types/interfaces';
import MessagesController from './MessagesController';

export class ChatController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = API;
  }

  async changeAvatar(data: FormData) {
    try {
      const result = await this.api.changeAvatar(data);
      store.set('chats.current.avatar', result.avatar);
      this.fetchChats()
    } catch (e: any) {
      console.error(e.message)
    }
  }

  async deleteChat(data: DeleteChatData) {
    try {
      await this.api.delete(data);
      await this.fetchChats();
      store.set('chats.current', null);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async deleteUserToChat(data: ChatsUsersData) {
    try {
      await this.api.deleteUsers(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async addUserToChat(data: ChatsUsersData) {
    try {
      await this.api.addUsers(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchChats() {
    try {
      store.set('chats.chats', null);
      const chats = await this.api.read();
      store.set('chats.chats', [...chats]);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async createChat(data: ChatsData) {
    try {
      const chat = await this.api.create(data);

      await this.selectChat({
        title: data.title,
        id: chat.id,
        avatar: undefined,
      });

      return chat;
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
      await MessagesController.connect(data.id, token!);
      store.set('chats.current', { ...data, token });
      return { ...data, token };
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new ChatController();
