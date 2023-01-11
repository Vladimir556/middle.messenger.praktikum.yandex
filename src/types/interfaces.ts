export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface UserInfo {
  id?: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UpdateProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UpdateAvatarData {
  avatar: FormData;
}

export interface UpdatePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface UserSearchData {
  login: string
}

export interface ChatsData {
  title: string;
}

export interface DeleteChatData {
  chatId: number;
}

export interface ChatsUsersData {
  users: [number];
  chatId: number;
}

export interface ChatTokenData {
  id: number
}

export interface SelectChatData {
  title: string,
  avatar: string,
  id: number,
}

export interface Message {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  }
}
