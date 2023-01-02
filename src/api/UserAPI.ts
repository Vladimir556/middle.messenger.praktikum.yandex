import BaseAPI from './BaseAPI';

export class UserAPI extends BaseAPI {
	constructor() {
		super('/user');
	}

	read = undefined;
	create = undefined;
  update = undefined;
	delete = undefined;
}

export default new UserAPI();
