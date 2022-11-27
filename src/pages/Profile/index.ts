import {renderDom} from "../../utils/renderDom";
import {ProfilePage} from "./profile";

window.addEventListener('DOMContentLoaded', () => {
  const profilePage = new ProfilePage({
    email: "pochta@yandex.ru",
    login: "ivanivanov",
    first_name: "Иван",
    second_name: "Иванов",
    display_name: "Иван",
    phone: "+7(909)967-30-30"
  });
  renderDom('#app', profilePage)
})