import Block from '../../../utils/Block';
import template from './backButton.hbs';
import * as styles from './backButton.scss';
import arrowSVG from '../../../static/arrow.svg';
import {withRouter} from "../../../hocs/withRouter";

interface BackButtonProps {
	href: string;
	events?: {
		click: () => void;
	};
}

export class BackButtonBase extends Block {
	constructor(props: BackButtonProps) {
		super({
      ...props,
      events: {
        click: () => this.navigate()
      }
    });
	}

  navigate() {
    this.props.router.go(this.props.href)
  }

	protected render(): DocumentFragment {
		return this.compile(template, {...this.props, styles, arrowSVG});
	}
}

export const BackButton = withRouter(BackButtonBase)
