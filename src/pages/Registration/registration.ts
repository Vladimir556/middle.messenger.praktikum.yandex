import Block from '../../utils/Block';
import template from './registration.hbs';
import { RegistrationForm } from '../../components/Form/registrationForm/registrationForm';
import { getFormData } from '../../utils/helpers/getFormData';
import { validateForm } from '../../utils/validation/validateForm';

export class RegistrationPage extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children.registrationForm = new RegistrationForm({
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
