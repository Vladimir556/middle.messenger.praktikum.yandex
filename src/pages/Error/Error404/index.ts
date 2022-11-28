import { renderDom } from '../../../utils/renderDom';
import { ErrorPage } from '../error';

window.addEventListener('DOMContentLoaded', () => {
  const error404 = new ErrorPage({
    statusCode: 404,
    errorMessage: 'Не туда попали',
  });
  renderDom('#app', error404);
});
