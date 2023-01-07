import API, { UserAPI } from '../api/UserAPI';
import { UpdatePasswordData, UpdateProfileData } from '../types/interfaces';
import store from '../utils/Store';

export class UserController {
	private readonly api: UserAPI;

	constructor() {
		this.api = API;
	}

	async updateProfile(data: UpdateProfileData) {
		try {
			const updatedUser = await this.api.updateProfile(data);
			store.set('user', updatedUser);
		} catch (e: any) {
			console.error(e);
		}
	}

	async updateProfileAvatar(data: FormData) {
		try {
			await this.api.updateAvatar(data);
		} catch (e: any) {
			console.error(e);
		}
	}

	async updateProfilePassword(data: UpdatePasswordData) {
		try {
			await this.api.updatePassword(data);
		} catch (e: any) {
			console.error(e);
		}
	}

	// async user(data: { id: number}) {
	//   try {
	//
	//   } catch (e: any) {
	//     console.error(e);
	//   }
	// }
	//
	// async search(data: { login: string }) {
	//   try {
	//
	//   } catch (e: any) {
	//     console.error(e)
	//   }
	// }
}

export default new UserController();
