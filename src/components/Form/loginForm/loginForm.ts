import Block from "../../../utils/Block";
import template from "./loginForm.hbs";
import * as styles from "./../form.scss"
import {Button} from "../../buttons/Button/button";
import {Link} from "../../buttons/Link/link";
import {LabeledInput} from "../../inputs/Input/LabeledInput/labeledInput";

interface LoginFormProps{
  events:{
    submit: (event?: Event) => void
  }
}

export class LoginForm extends Block{
  constructor(props: LoginFormProps) {
    super(props);
  }

  protected init() {
    this.setProps({styles})

    this.children.loginInput = new LabeledInput({
      type: 'text',
      name: 'login',
      id: 'login',
      labelText: 'Логин'
    })

    this.children.passwordInput = new LabeledInput({
      type: 'password',
      name: 'password',
      id: 'password',
      labelText: 'Пароль',
    })

    this.children.buttonLogin = new Button({
      text: 'Войти'
    })

    this.children.registerLink = new Link({
      text: 'Нет аккаунта?',
      href: '/Registration'
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}