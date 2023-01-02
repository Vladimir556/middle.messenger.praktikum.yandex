import Block from '../../../utils/Block';
import template from '../profile.hbs';
import avatarSVG from '../../../static/avatar.svg';
import * as styles from '../profile.scss';
import { ProfileForm } from '../../../components/Form/profileForm/profileForm';
import { BackButton } from '../../../components/buttons/BackButton/backButton';
import { validateForm } from '../../../utils/validation/validateForm';
import { getFormData } from '../../../utils/helpers/getFormData';

export class ProfileChangePassPage extends Block {
  constructor() {
    super();
  }

  protected init() {
    this.setProps({ styles, avatarSVG });

    this.children.backButton = new BackButton({
      href: '/profile',
    });

    this.children.profileForm = new ProfileForm({
      isChangeForm: true,
      isChangePassForm: true,
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
