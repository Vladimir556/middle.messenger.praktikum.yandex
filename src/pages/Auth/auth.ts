import Block from '../../utils/Block';
import template from './auth.hbs';
import { LoginForm } from '../../components/Form/loginForm/loginForm';
import { getFormData } from '../../utils/getFormData';
import { validateForm } from '../../utils/validateForm';

export class AuthPage extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children.loginForm = new LoginForm({
      events: {
        submit: (event) => {
          event!.preventDefault();
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
