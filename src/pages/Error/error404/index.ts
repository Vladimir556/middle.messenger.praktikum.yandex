import {renderDom} from "../../../utils/renderDom";
import {ErrorPage} from "../error";


window.addEventListener('DOMContentLoaded', () => {
  const errorPage = new ErrorPage({statusCode: 404, errorMessage: 'Не туда попали'})
  renderDom('#app', errorPage)
});

