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
