// base
import Block from '../../../utils/Block';
import template from './changeAvatarModal.hbs';

// styles
import * as styles from './changeAvatarModal.scss';
import { Button } from '../../buttons/Button/button';

// controllers
import userController from '../../../controllers/UserController';

interface changeAvatarModalProps {
	imageName?: string;
	changeModalActive?: boolean;
	events?: {
		change?: () => void;
		submit?: (event: Event) => void;
	};
}

export class changeAvatarModal extends Block {
	constructor(props: changeAvatarModalProps) {
		super({
			...props,
			events: {
				change: () => this.onChange(),
				submit: (event: Event) => this.onSubmit(event)
			}
		});
	}

	onSubmit(event: Event) {
		event.preventDefault();

    if (this.props.uploadAvatar) {
      const data = new FormData()
      data.append('avatar', this.props.uploadAvatar)
      userController.updateProfileAvatar(data);
    }
	}

	onChange() {
		const avatarUpload = document.querySelector(
			'#avatar-upload'
		) as HTMLInputElement;

		if (avatarUpload) {
			this.setProps({
				imageName: avatarUpload!.files![0].name,
        uploadAvatar: avatarUpload!.files![0]
			});
		}
	}

	protected init() {
		this.children.modalBtn = new Button({
			text: 'Поменять'
		});
	}

	protected render(): DocumentFragment {
		return this.compile(template, { ...this.props, styles });
	}
}
