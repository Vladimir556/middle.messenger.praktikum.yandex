import API, { UserAPI } from '../api/UserAPI';
import { UpdatePasswordData, UpdateProfileData, UserInfo, UserSearchData } from '../types/interfaces';
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
			const updatedUser = await this.api.updateAvatar(data);
      store.set('user', updatedUser)
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

  async searchUser(data: UserSearchData) {
    try {
      const searchUsersData = await this.api.search(data);
      return searchUsersData as [UserInfo]
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
