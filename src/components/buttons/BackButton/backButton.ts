import Block from "../../../utils/Block";
import template from "./backButton.hbs";
import * as styles from "./backButton.scss"
import arrowSVG from "./../../../static/arrow.svg"

interface BackButtonProps{
  href: string
}

export class BackButton extends Block{
  constructor(props: BackButtonProps) {
    super('div', props, 'back-button');
  }

  protected init() {
    this.setProps({styles, arrowSVG})
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}