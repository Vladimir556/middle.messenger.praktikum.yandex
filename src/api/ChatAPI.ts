import BaseAPI from './BaseAPI';

export class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new ChatAPI();
