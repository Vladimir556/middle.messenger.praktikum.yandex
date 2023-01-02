import Block from '../../../utils/Block';
import template from './link.hbs';
import * as styles from './link.scss';
import {withRouter} from "../../../hocs/withRouter";

interface LinkProps {
	text: string;
	href: string;
	events?: {
		click: () => void;
	};
}

class BaseLink extends Block {
	constructor(props: LinkProps) {
		super({
			...props,
			events: {
				click: () => this.navigate()
			}
		});
	}

	navigate() {
		this.props.router.go(this.props.href);
	}

	protected init() {
		this.setProps({ styles });
	}

	protected render(): DocumentFragment {
		return this.compile(template, this.props);
	}
}

export const Link = withRouter(BaseLink)
