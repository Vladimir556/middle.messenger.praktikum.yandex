import Block from "../../utils/Block";
import template from "./chat.hbs"
import * as styles from "./../../styles/styles.scss"

interface ChatPageProps{
  title:string
}

export class ChatPage extends Block{
  constructor(props: any) {
    super('div', props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {styles})
  }
}