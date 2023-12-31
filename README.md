# О проекте:

Проект представляет собой React приложение интернет-магазина. Приложение позволяет пользователям просматривать, фильтровать ,сортировать товары; добавлять их в корзину;совершать покупки и просматривать свою историю покупок.

Посмотреть сайт можно по ссылке : [https://vikaonoshko.github.io/diplom/](https://vikaonoshko.github.io/diplom/) 
___________________________________________________


### Используемые технологии:

- :white_check_mark: React
- :white_check_mark: TypeScript
- :white_check_mark: Less
- :white_check_mark: Axios
- :white_check_mark: Redux
- :white_check_mark: Redux Toolkit
- :white_check_mark: Redux Toolkit Query
- :white_check_mark: Firebase
- :white_check_mark: Formik && Yup
- :white_check_mark: React-router-dom
- :white_check_mark: mockAPI
- :white_check_mark: Vite

_____________________


### В приложении есть следующие возможности:

- Авторизация пользователя
- Фильтрация товаров по категориям
- Сортировка товаров по цене,рейтингу
- Пагинация товаров
- Поиск товаров
- Добавление товаров в корзину
- Оформление заказа
- Просмотр истории заказов

___________________________________________

## Подробнее:

**_Авторизация пользователя_**

Для авторизации пользователя используется библиотека Firebase. Пользователи могут зарегистрироваться или войти в систему с помощью своего адреса электронной почты и пароля.

**_Фильтрация товаров_**

Пользователи могут фильтровать товары по категориям. Фильтрация осуществляется на сервере.

**_Пагинация товаров_**

Товары отображаются постранично.

**_Поиск товаров_**

Пользователи могут искать товары по названию товара.

**_Сохранение данных в Local Storige и на сервер_**

Тема,список товаров для неавторизованных пользователей в корзине сохраняются в Local Storige.Список товаров в корзине для авторизованных пользователей,список заказов сохраняются на сервере.

**_Взаимодействие с сервером_**

Отправка запросов осуществляется с помощью библиотек AXIOS и Redux Toolkit Query.

**_Заполнение и валидация форм_**

Для заполнения форм используется библиотека Formik,а для валидации форм Yup.

Прокт собран с использованием сборщика Vite.
