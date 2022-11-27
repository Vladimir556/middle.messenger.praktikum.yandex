import Block from "../../utils/Block";
import template from "./profile.hbs";
import {BackButton} from "../../components/buttons/BackButton/backButton";
import {Link} from "../../components/buttons/Link/link";
import avatarSVG from "./../../static/avatar.svg"
import * as styles from "./profile.scss"
import {LabeledInput} from "../../components/inputs/Input/LabeledInput/labeledInput";

interface ProfilePageProps{
  email: string
  login: string
  first_name: string
  second_name: string
  display_name: string
  phone: string
}

export class ProfilePage extends Block{
  constructor(props: ProfilePageProps) {
    super(props);
  }

  protected init() {
    this.setProps({styles, avatarSVG})

    this.children.backButton = new BackButton({
      href: '/'
    })

    this.children.emailInput = new LabeledInput({
      type: 'text',
      disabled: true,
      name: 'email',
      id: 'email',
      labelText: 'Почта',
      value: this.props.email
    })

    this.children.loginInput = new LabeledInput({
      type: 'text',
      disabled: true,
      name: 'login',
      id: 'login',
      labelText: 'Логин',
      value: this.props.login
    })

    this.children.firstNameInput = new LabeledInput({
      type: 'text',
      disabled: true,
      name: 'first_name',
      id: 'first_name',
      labelText: 'Имя',
      value: this.props.first_name
    })

    this.children.secondNameInput = new LabeledInput({
      type: 'text',
      disabled: true,
      name: 'second_name',
      id: 'second_name',
      labelText: 'Фамилия',
      value: this.props.second_name
    })

    this.children.displayNameInput = new LabeledInput({
      type: 'text',
      disabled: true,
      name: 'display_name',
      id: 'display_name',
      labelText: 'Имя в чате',
      value: this.props.display_name
    })

    this.children.phoneInput = new LabeledInput({
      type: 'text',
      disabled: true,
      name: 'phone',
      id: 'phone',
      labelText: 'Телефон',
      value: this.props.phone
    })

    this.children.changeInfoLink = new Link({
      text: 'Изменить данные',
      href: ''
    })

    this.children.changePasswordLink = new Link({
      text: 'Изменить пароль',
      href: ''
    })

    this.children.logOutLink = new Link({
      text: 'Выйти',
      href: '/Auth/'
    })


  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}