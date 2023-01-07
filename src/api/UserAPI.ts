import BaseAPI from './BaseAPI';
import {
	UpdateAvatarData,
	UpdatePasswordData,
	UpdateProfileData
} from '../types/interfaces';

export class UserAPI extends BaseAPI {
	constructor() {
		super('/user');
	}

	updateProfile(data: UpdateProfileData) {
		return this.http.put('/profile', { data });
	}

	updateAvatar(data: UpdateAvatarData) {
		return this.http.put(
      '/profile/avatar',
      {
        data,
        file: true,
      });
	}

	updatePassword(data: UpdatePasswordData) {
		return this.http.put('/password', { data });
	}

	read = undefined;
	create = undefined;
	update = undefined;
	delete = undefined;
}

export default new UserAPI();
