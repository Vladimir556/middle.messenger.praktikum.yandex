import Block from "../../utils/Block";
import template from "./error.hbs";

interface ErrorPageProps{
  statusCode: number,
  errorMessage: string
}

export class ErrorPage extends Block{
  constructor(props: ErrorPageProps) {
    super('main', props);
  }

  protected init() {

  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}