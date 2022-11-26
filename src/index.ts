import {ChatPage} from "./pages/Chat/chat";
import {renderDom} from "./utils/renderDom";
import {ErrorPage} from "./pages/Error/error";
import {AuthPage} from "./pages/Auth/auth";
import {RegistrationPage} from "./pages/Registration/registration";

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
      const authPage = new AuthPage({})
      renderDom('#app', authPage)
      break

    case '/registration':
      const registrationPage = new RegistrationPage({})
      renderDom('#app', registrationPage)
      break

    default:
      const error404 = new ErrorPage({
        statusCode: 404,
        errorMessage: 'Не туда попали'
      })
      renderDom('#app', error404)
  }

});

