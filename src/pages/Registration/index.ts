import {renderDom} from "../../utils/renderDom";
import {RegistrationPage} from "./registration";


window.addEventListener('DOMContentLoaded', () => {
  const registrationPage = new RegistrationPage({

  })
  renderDom('#app', registrationPage)
});

