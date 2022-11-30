import Block from '../../../utils/Block';
import template from './profileForm.hbs';
import { LabeledInput } from '../../inputs/Input/LabeledInput/labeledInput';
import { Link } from '../../buttons/Link/link';
import { Button } from '../../buttons/Button/button';

interface ProfileFormProps {
  isChangeForm: boolean,
  isChangePassForm?: boolean,
  email?: string
  login?: string
  first_name?: string
  second_name?: string
  display_name?: string
  phone?: string
  events?:{
    submit?: (event: Event) => void
  }
}

export class ProfileForm extends Block {
  constructor(props: ProfileFormProps) {
    super(props);
  }

  protected init() {
    this.children.emailInput = new LabeledInput({
      type: 'text',
      disabled: !this.props.isChangeForm,
      name: 'email',
      id: 'email',
      labelText: 'Почта',
      value: this.props.email,
    });

    this.children.loginInput = new LabeledInput({
      type: 'text',
      disabled: !this.props.isChangeForm,
      name: 'login',
      id: 'login',
      labelText: 'Логин',
      value: this.props.login,
    });

    this.children.firstNameInput = new LabeledInput({
      type: 'text',
      disabled: !this.props.isChangeForm,
      name: 'first_name',
      id: 'first_name',
      labelText: 'Имя',
      value: this.props.first_name,
    });

    this.children.secondNameInput = new LabeledInput({
      type: 'text',
      disabled: !this.props.isChangeForm,
      name: 'second_name',
      id: 'second_name',
      labelText: 'Фамилия',
      value: this.props.second_name,
    });

    this.children.displayNameInput = new LabeledInput({
      type: 'text',
      disabled: !this.props.isChangeForm,
      name: 'display_name',
      id: 'display_name',
      labelText: 'Имя в чате',
      value: this.props.display_name,
    });

    this.children.phoneInput = new LabeledInput({
      type: 'text',
      disabled: !this.props.isChangeForm,
      name: 'phone',
      id: 'phone',
      labelText: 'Телефон',
      value: this.props.phone,
    });

    this.children.passwordOldInput = new LabeledInput({
      type: 'password',
      disabled: !this.props.isChangeForm,
      name: 'oldPassword',
      id: 'oldPassword',
      labelText: 'Старый пароль',
      value: this.props.phone,
    });

    this.children.passwordInput = new LabeledInput({
      type: 'password',
      disabled: !this.props.isChangeForm,
      name: 'password',
      id: 'password',
      labelText: 'Новый пароль',
      value: this.props.phone,
    });

    this.children.passwordRepeatInput = new LabeledInput({
      type: 'password',
      disabled: !this.props.isChangeForm,
      name: 'repeatPassword',
      id: 'repeatPassword',
      labelText: 'Повторите новый пароль',
      value: this.props.phone,
    });

    this.children.changeInfoLink = new Link({
      text: 'Изменить данные',
      href: '/Profile/changeInfo',
    });

    this.children.changePasswordLink = new Link({
      text: 'Изменить пароль',
      href: '/Profile/changePass',
    });

    this.children.logOutLink = new Link({
      text: 'Выйти',
      href: '/Auth/',
    });

    this.children.saveButton = new Button({
      text: 'Сохранить',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
