import {renderDom} from "../../utils/renderDom";
import {AuthPage} from "./auth";

window.addEventListener('DOMContentLoaded', () => {
  const authPage = new AuthPage()
  renderDom('#app', authPage)
})