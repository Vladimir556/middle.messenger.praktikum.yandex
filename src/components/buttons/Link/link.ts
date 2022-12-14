import Block from '../../../utils/Block';
import template from './link.hbs';
import * as styles from './link.scss';

interface LinkProps {
  text: string
  href: string
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  protected init() {
    this.setProps({ styles });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
