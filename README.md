## 1. Завантажуємо репозиторій та розгортаємо проект

`npm install`

або

`yarn`

## 2. Запускаємо сервер за допомогою nodemon

`npm run start`

або

`yarn start`

## Маршрути сервера

### /: Головний маршрут, що повертає "Get root route".

### /users: Маршрут для користувачів (потрібно мати токен авторизації):
1. GET: "Get users route".
2. POST: "Post users route". (обовʼязкові данні: username та password)

### /users/:userId: Маршрут для окремого користувача (потрібно мати токен авторизації):
1. GET: "Get user by Id route: {userId}".
2. PUT: "Put user by Id route: {userId}". (обовʼязкові данні: username та password)
3. DELETE: "Delete user by Id route: {userId}".

### /articles: Маршрут для статей (потрібно мати токен авторизації):
1. GET: "Get articles route".
2. POST: "Post articles route".

### /articles/:page: Маршрут для статей (потрібно мати токен авторизації):
1. GET: "Get articles route by page".

### /article/:articleId: Маршрут для конкретної статті (потрібно мати токен авторизації):
1. GET: "Get article by Id route: {articleId}".
2. PUT: "Put article by Id route: {articleId}".
3. DELETE: "Delete article by Id route: {articleId}".

### /login
1. GET: LOGIN page
2. POST: form action (POST method)

### /register
1. GET: REGISTER page
2. POST: form action (POST method)