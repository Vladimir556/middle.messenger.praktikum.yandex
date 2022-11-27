import {renderDom} from "../../../utils/renderDom";
import {ErrorPage} from "../error";

window.addEventListener('DOMContentLoaded', () => {
  const error404 = new ErrorPage({
    statusCode: 404,
    errorMessage: 'Мы уже фиксим'
  })
  renderDom('#app', error404)
})