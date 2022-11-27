import {ChatPage} from "./pages/Chat/chat";
import {renderDom} from "./utils/renderDom";
import {ErrorPage} from "./pages/Error/error";
import {AuthPage} from "./pages/Auth/auth";
import {RegistrationPage} from "./pages/Registration/registration";
import {ProfilePage} from "./pages/Profile/profile";

const { pathname } = location;

window.addEventListener('DOMContentLoaded', () => {
  switch (pathname) {
    case '/':
      const chatPage = new ChatPage({
        profileName: 'Вадим',
        profileImgUrl: 'https://i.pravatar.cc/300?img=68'
      });
      renderDom('#app', chatPage)
      break

    case '/login':
      const authPage = new AuthPage()
      renderDom('#app', authPage)
      break

    case '/registration':
      const registrationPage = new RegistrationPage()
      renderDom('#app', registrationPage)
      break

    case '/profile':
      const profilePage = new ProfilePage({
        email: "pochta@yandex.ru",
        login: "ivanivanov",
        first_name: "Иван",
        second_name: "Иванов",
        display_name: "Иван",
        phone: "+7(909)967-30-30"
      });
      renderDom('#app', profilePage)
      break

    default:
      const error404 = new ErrorPage({
        statusCode: 404,
        errorMessage: 'Не туда попали'
      })
      renderDom('#app', error404)
  }

});

