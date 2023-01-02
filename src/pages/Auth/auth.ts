import Block from '../../utils/Block';
import template from './auth.hbs';
import { LoginForm } from '../../components/Form/loginForm/loginForm';
import { validateForm } from '../../utils/validation/validateForm';
import { getFormData } from '../../utils/helpers/getFormData';
import AuthController from "../../controllers/AuthController";
import {SigninData} from "../../types/interfaces";

export class AuthPage extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children.loginForm = new LoginForm({
      events: {
        submit: (event) => {
          event!.preventDefault();
          if (validateForm(event!)) {
            const data = getFormData(event!)
            AuthController.signin(data as SigninData)
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
