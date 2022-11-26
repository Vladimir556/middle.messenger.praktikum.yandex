import Block from "../../utils/Block";
import template from "./registration.hbs";
import {RegistrationForm} from "../../components/Form/registrationForm/registrationForm";
import {getFormData} from "../../utils/getFormData";

interface RegistrationPageProps{

}

export class RegistrationPage extends Block{
  constructor(props: RegistrationPageProps) {
    super('main', props);
  }

  protected init() {
    this.children.registrationForm = new RegistrationForm({
      events: {
        submit: (event) => {
          event!.preventDefault()
          getFormData(event!)
        }
      }
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}