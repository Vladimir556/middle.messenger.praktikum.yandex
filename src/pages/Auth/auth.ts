import Block from "../../utils/Block";
import template from "./auth.hbs"
import {LoginForm} from "../../components/Form/loginForm/loginForm";
import {getFormData} from "../../utils/getFormData";

interface AuthPageProps{

}

export class AuthPage extends Block{
  constructor(props: AuthPageProps) {
    super('main', props);
  }

  protected init() {
    this.children.loginForm = new LoginForm({
      events:{
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