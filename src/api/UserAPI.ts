import BaseAPI from './BaseAPI';
import {
	UpdatePasswordData,
	UpdateProfileData,
	UserSearchData
} from '../types/interfaces';

export class UserAPI extends BaseAPI {
	constructor() {
		super('/user');
	}

	updateProfile(data: UpdateProfileData) {
		return this.http.put('/profile', { data });
	}

	updateAvatar(data: FormData) {
		return this.http.put('/profile/avatar', {
			data,
			file: true
		});
	}

	updatePassword(data: UpdatePasswordData) {
		return this.http.put('/password', { data });
	}

	search(data: UserSearchData) {
		return this.http.post('/search', { data });
	}

	read = undefined;
	create = undefined;
	update = undefined;
	delete = undefined;
}

export default new UserAPI();
