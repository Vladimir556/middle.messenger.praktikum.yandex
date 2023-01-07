// base
import Block from '../../utils/Block';
import template from './profile.hbs';

// styles
import * as styles from './profile.scss';

// interfaces and types
import {UpdatePasswordData, UpdateProfileData} from "../../types/interfaces";

// components
import { BackButton } from '../../components/buttons/BackButton/backButton';
import { ProfileForm } from '../../components/Form/profileForm/profileForm';
import { ControlLink } from '../../components/buttons/Link/ControlLink/ControlLink';
import {Avatar} from "../../components/Avatar/avatar";

// controllers
import AuthController from '../../controllers/AuthController';
import UserController from "../../controllers/UserController";

// utils
import router from '../../utils/Router';
import { validateForm } from '../../utils/validation/validateForm';
import { getFormData } from '../../utils/helpers/getFormData';

// hocs
import { withStore } from '../../utils/Store';


export class ProfilePageBase extends Block {

	protected init() {
		this.setProps({
			isChangePassForm: false,
			isChangeForm: false
		});

		AuthController.fetchUser();

    this.children.profileAvatar = new Avatar({
      url: this.props.avatar
    })

		this.children.backButton = new BackButton({
			href: '/messenger'
		});

		this.children.changeInfoLink = new ControlLink({
			text: 'Изменить данные',
			events: {
				click: () => {
					this.setProps({ isChangeForm: true });
				}
			}
		});

		this.children.changePasswordLink = new ControlLink({
			text: 'Изменить пароль',
			events: {
				click: () => {
					this.setProps({ isChangeForm: true, isChangePassForm: true });
				}
			}
		});

		this.children.logOutLink = new ControlLink({
			text: 'Выйти',
			events: {
				click: () => {
					AuthController.logout();
					router.go('/');
				}
			}
		});

    this.children.settingsCloseLink = new ControlLink({
      text: 'Отмена',
      events: {
        click: () => this.setProps({
          isChangeForm: false,
          isChangePassForm: false
        })
      }
    })
	}

	protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    this.children.profileAvatar = new Avatar({
      url: this.props.avatar
    })

		this.children.profileForm = new ProfileForm({
			isChangeForm: this.props.isChangeForm,
			isChangePassForm: this.props.isChangePassForm,
			email: this.props.email,
			login: this.props.login,
			first_name: this.props.first_name,
			second_name: this.props.second_name,
			display_name: this.props.display_name,
			phone: this.props.phone,
			events: {
				submit: (event) => this.onSubmit(event)
			}
		});
		return super.componentDidUpdate(oldProps, newProps);
	}

  onSubmit(event: Event) {
    event.preventDefault();

    if (validateForm(event)) {
      const data = getFormData(event);

      if (this.props.isChangePassForm) {
        console.log('update password')
        UserController.updateProfilePassword(data as UpdatePasswordData)
      } else {
        console.log('update info')
        UserController.updateProfile(data as UpdateProfileData)
      }

      this.setProps({
        isChangeForm: false,
        isChangePassForm: false
      })
    }
  }

	protected render(): DocumentFragment {
		return this.compile(template, { ...this.props, styles});
	}
}

const withUser = withStore((state) => ({ ...state.user }));

export const ProfilePage = withUser(ProfilePageBase)
