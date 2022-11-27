import Block from "../../../utils/Block";
import template from "./loginForm.hbs";
import * as styles from "./../form.scss"
import {Input} from "../../inputs/Input/input";
import {Button} from "../../buttons/Button/button";
import {Link} from "../../buttons/Link/link";

interface LoginFormProps{
  events:{
    submit: (event?: Event) => void
  }
}

export class LoginForm extends Block{
  constructor(props: LoginFormProps, className: string = 'form-validate') {
    super('form', props, className);
  }

  protected init() {
    this.setProps({styles})

    this.children.loginInput = new Input({
      type: 'text',
      name: 'login',
      id: 'login',
      labelText: 'Логин',
    })

    this.children.passwordInput = new Input({
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