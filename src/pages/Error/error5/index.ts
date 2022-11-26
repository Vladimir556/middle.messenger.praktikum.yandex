import {renderDom} from "../../../utils/renderDom";
import {ErrorPage} from "../error";


window.addEventListener('DOMContentLoaded', () => {
  const errorPage = new ErrorPage({statusCode: 500, errorMessage: 'Мы уже фиксим'})
  renderDom('#app', errorPage)
});

