import { renderDom } from '../../../utils/renderDom';
import { ProfileChangePassPage } from './profileChangePass';

window.addEventListener('DOMContentLoaded', () => {
  const profilePage = new ProfileChangePassPage();
  renderDom('#app', profilePage);
});
