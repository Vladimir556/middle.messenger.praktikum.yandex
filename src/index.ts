import Router from './utils/Router';
import { AuthPage } from './pages/Auth/auth';
import { RegistrationPage } from './pages/Registration/registration';
import { ProfilePage } from './pages/Profile/profile';
import { ChatPage } from './pages/Chat/chat';
import { Routes } from './constants/routes';
import AuthController from './controllers/AuthController';

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, AuthPage)
    .use(Routes.Register, RegistrationPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, ChatPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();
    if (!isProtectedRoute) {
      Router.go(Routes.Profile);
    }
  } catch (e) {
    Router.start();
    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
