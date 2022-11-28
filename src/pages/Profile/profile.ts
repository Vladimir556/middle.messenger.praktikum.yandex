import Block from '../../utils/Block';
import template from './profile.hbs';
import { BackButton } from '../../components/buttons/BackButton/backButton';
import avatarSVG from '../../static/avatar.svg';
import * as styles from './profile.scss';
import { ProfileForm } from '../../components/Form/profileForm/profileForm';

interface ProfilePageProps {
  email: string
  login: string
  first_name: string
  second_name: string
  display_name: string
  phone: string
}

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super(props);
  }

  protected init() {
    this.setProps({ styles, avatarSVG });

    this.children.backButton = new BackButton({
      href: '/',
    });

    this.children.profileForm = new ProfileForm({
      isChangeForm: false,
      email: this.props.email,
      login: this.props.login,
      first_name: this.props.first_name,
      second_name: this.props.second_name,
      display_name: this.props.display_name,
      phone: this.props.phone,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
