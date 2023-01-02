import Block from '../../../utils/Block';
import template from '../profile.hbs';
import avatarSVG from '../../../static/avatar.svg';
import * as styles from '../profile.scss';
import { ProfileForm } from '../../../components/Form/profileForm/profileForm';
import { BackButton } from '../../../components/buttons/BackButton/backButton';
import { validateForm } from '../../../utils/validation/validateForm';
import { getFormData } from '../../../utils/helpers/getFormData';

interface ProfileChangeInfoPageProps {
  email: string
  login: string
  first_name: string
  second_name: string
  display_name: string
  phone: string
}

export class ProfileChangeInfoPage extends Block {
  constructor(props: ProfileChangeInfoPageProps) {
    super(props);
  }

  protected init() {
    this.setProps({ styles, avatarSVG });

    this.children.backButton = new BackButton({
      href: '/profile',
    });

    this.children.profileForm = new ProfileForm({
      isChangeForm: true,
      email: this.props.email,
      login: this.props.login,
      first_name: this.props.first_name,
      second_name: this.props.second_name,
      display_name: this.props.display_name,
      phone: this.props.phone,
      events: {
        submit: (event) => {
          event.preventDefault();
          validateForm(event!);
          getFormData(event!);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
