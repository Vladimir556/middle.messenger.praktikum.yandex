import API, {UserAPI} from "../api/UserAPI";
import {User} from "../types/interfaces";

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API
  }

  async updateProfile(data: User) {
    try {

    } catch (e: any) {
      console.error(e)
    }
  }

  async updateProfileAvatar(data: User) {
    try {

    } catch (e: any) {
      console.error(e)
    }
  }

  async updateProfilePassword(data: User) {
    try {

    } catch (e: any) {
      console.error(e)
    }
  }

  async user(data: { id: number}) {
    try {

    } catch (e: any) {
      console.error(e);
    }
  }

  async search(data: { login: string }) {
    try {

    } catch (e: any) {
      console.error(e)
    }
  }
}
