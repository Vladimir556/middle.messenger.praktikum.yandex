<h1 align="center">
    Учебный проект Яндекс.Практикум "Мессенджер"
</h1>
<br>

## Описание
"Мессенджер" - это приложение чата, где вы можете общаться со своими друзьями и знакомыми (Проект на стадии разработки)

### На данный момент реализовано:
- Статические страницы для авторизации/регистрации пользователя, страница чата, профиля, настройки профиля, также страница с ошибками 404 и 500
- Валидация полей полей форм на страницах авторизации, регистрации, настроек прфиля по событиям `blur`, `focus`, `submit`
- Вывод объекта с полями форм в консоль
- Класс `HTTPTransport` для будущего взаимодействия с API
- В проекте используется компонентный подход, написанный на `TypeScript`

### В прокте используется:
- [**Handlebars**](https://handlebarsjs.com) — отображение шаблонов HTML
- [**Typescript**](https://www.typescriptlang.org)
- [**ESLint**](https://eslint.org) и [**Stylelint**](https://stylelint.io) — анализа кода
- [**Parcel**](https://parceljs.org) — сборка проекта
- [**Figma**](https://www.figma.com/file/6jnOQDvohaTCNvNbSWfuyF/Chat_UI) - макет **UI** проекта
- [**Netlify**](https://www.netlify.com) — для автоматического деплоя проекта

[![Netlify Status](https://api.netlify.com/api/v1/badges/adbdeda7-df7c-4840-9fc2-9b3358bbb980/deploy-status)](https://app.netlify.com/sites/stupendous-tiramisu-2afc9d/deploys)

## Команды для сборки и запуска проекта
- `npm run dev` - запуск проекта в режиме разработки,
- `npm run build` - сборка проекта,
- `npm run start` - сборка и запуск локального сервера express.
- `npm run eslit` - проверка кода eslint
- `npm run eslit:fix` - проверка и исправление ошибок кода eslint
- `npm run stylelint` - проверка кода stylelint
- `npm run stylelint:fix` - проверка и исправление ошибок кода stylelint
