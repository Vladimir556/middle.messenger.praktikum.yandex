<h1 align="center">
    Учебный проект Яндекс.Практикум "Мессенджер"
</h1>
<br>

## Описание
"Мессенджер" - это приложение чата, где вы можете общаться со своими друзьями и знакомыми (Проект на стадии разработки)

**Ссылка на предыдущую версию `Netlify`** - https://stupendous-tiramisu-2afc9d.netlify.app/

**Ссылка на приложение** - https://chat-app-example-a904.onrender.com/


### На данный момент реализовано:
- работа с API чата (создавние чата, удаление чата, добавление пользователей в чат, отправка сообщений)
- Валидация полей полей форм на страницах авторизации, регистрации, настроек прфиля по событиям `blur`, `focus`, `submit`
- Авторизация, Регистрация и изменение профиля пользователя
- Класс `WSTransport` для отправки сообщение в режиме реального времени
- Класс `HTTPTransport` для взаимодействия с API
- В проекте используется компонентный подход, написанный на `TypeScript`
- Написаны тесты для шаблонизатора, роутера, компонента, модуля отправки запросов.
- Настроен Dockerfile для деплоя приложения
- Приложение задеплоено в сервисе **Render.com**

### В прокте используется:
- [**Handlebars**](https://handlebarsjs.com) — отображение шаблонов HTML
- [**Typescript**](https://www.typescriptlang.org)
- [**ESLint**](https://eslint.org) и [**Stylelint**](https://stylelint.io) — для анализа кода
- [**Chai**](https://chai.ml/) и [**Mocha**](https://mochajs.org/) — для тестирования приложения
- [**Webpack**](https://webpack.js.org/) — сборка проекта
- [**Figma**](https://www.figma.com/file/6jnOQDvohaTCNvNbSWfuyF/Chat_UI) - макет **UI** проекта
- [**Render**](https://render.com/) — для деплоя проекта

[![Netlify Status](https://api.netlify.com/api/v1/badges/adbdeda7-df7c-4840-9fc2-9b3358bbb980/deploy-status)](https://app.netlify.com/sites/stupendous-tiramisu-2afc9d/deploys)

## Команды для сборки и запуска проекта
- `npm run dev` - запуск проекта в режиме разработки,
- `npm run build` - сборка проекта,
- `npm run start` - сборка и запуск локального сервера express.
- `npm run eslit` - проверка кода eslint
- `npm run eslit:fix` - проверка и исправление ошибок кода eslint
- `npm run stylelint` - проверка кода stylelint
- `npm run stylelint:fix` - проверка и исправление ошибок кода stylelint
- `npm run test` - запуск тестов
