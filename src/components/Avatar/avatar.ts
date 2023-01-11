// base
import Block from '../../utils/Block';
import template from './avatar.hbs';

// styles
import * as styles from './avatar.scss';

// assets
import avatarSVG from '../../static/avatar.svg';
import { changeAvatarModal } from './changeAvatarModal/changeAvatarModal';


interface AvatarProps {
  url: string;
  changeModalActive?: boolean;
  events?: {
    click: (event: Event) => void;
  };
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({
      ...props,
      changeModalActive: false,
      events: {
        click: (event: Event) => this.setChangeModalActive(event)
      }
    });
  }

  protected init() {
    this.children.changeAvatarModal = new changeAvatarModal({
      changeModalActive: false
    });
  }

  setChangeModalActive(event: Event) {
    // открытие модального окна изменения аватара
    if ((event.target as Element).className === 'avatar-mask'
      || (event.target as Element).className === 'avatar-mask__text') {
      this.children.changeAvatarModal.setProps({
        changeModalActive: true
      });
    }

    // закрытие модального окна
    if ((event.target as Element).className === 'modal') {
      this.children.changeAvatarModal.setProps({
        changeModalActive: false,
        imageName: null
      });
    }
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles, avatarSVG });
  }
}