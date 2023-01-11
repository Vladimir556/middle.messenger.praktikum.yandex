import Block from '../../utils/Block';
import template from './error.hbs';
import * as styles from './error.scss';
import { Link } from '../../components/buttons/Link/link';

interface ErrorPageProps {
  statusCode: number,
  errorMessage: string
}

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super(props);
  }

  protected init() {
    this.children.backToChatsLink = new Link({
      text: 'Назад к чатам',
      href: '/messenger',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
