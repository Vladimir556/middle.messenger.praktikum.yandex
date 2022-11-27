import Block from "../../../utils/Block";
import template from "./registrationForm.hbs";
import * as styles from "./../form.scss"
import {Button} from "../../buttons/Button/button";
import {Link} from "../../buttons/Link/link";
import { LabeledInput } from "../../inputs/Input/LabeledInput/labeledInput";

interface RegistrationFormProps{
  events:{
    submit: (event?: Event) => void
  }
}

export class RegistrationForm extends Block{
  constructor(props: RegistrationFormProps) {
    super(props);
  }

  protected init() {
    this.setProps({styles})

    this.children.emailInput = new LabeledInput({
      type: 'email',
      name: 'email',
      id: 'email',
      labelText: 'Почта',

    })

    this.children.loginInput = new LabeledInput({
      type: 'text',
      name: 'login',
      id: 'login',
      labelText: 'Логин',
    })

    this.children.firstNameInput = new LabeledInput({
      type: 'text',
      name: 'first_name',
      id: 'first_name',
      labelText: 'Имя',
    })

    this.children.secondNameInput = new LabeledInput({
      type: 'text',
      name: 'second_name',
      id: 'second_name',
      labelText: 'Фамилия',
    })

    this.children.phoneInput = new LabeledInput({
      type: 'text',
      name: 'phone',
      id: 'phone',
      labelText: 'Телефон',
    })

    this.children.passwordInput = new LabeledInput({
      type: 'password',
      name: 'password',
      id: 'password',
      labelText: 'Пароль',
    })

    this.children.repeatPasswordInput = new LabeledInput({
      type: 'password',
      name: 'repeatPassword',
      id: 'repeatPassword',
      labelText: 'Пароль (еще раз)',
    })

    this.children.submitButton = new Button({
      text: 'Зарегистрироваться'
    })

    this.children.loginLink = new Link({
      text: 'Войти',
      href: '/Auth'
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}