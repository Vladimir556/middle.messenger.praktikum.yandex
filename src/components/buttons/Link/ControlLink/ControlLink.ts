import template from './ControlLink.hbs';
import * as styles from '../link.scss';
import Block from '../../../../utils/Block';

interface ControlLinkProps {
  text: string;
  class?: string;
  events?: {
    click?: (event?: Event) => void;
  };
}

export class ControlLink extends Block {
  constructor(props: ControlLinkProps) {
    super({
      ...props,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
