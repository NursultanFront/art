# Тестовое задание для компаний Арт аксессориз

This template should help get you started developing with Vue 3 in Vite.

## Задачи 

Реализовать пути в vue router 
        / - общий путь с <ctable :filter=""></ctable> где мы загружаем данные из API в pinia store
          - Изначально загружатся все элементы стран в pinia store.
          - Также мы можем отфильтровать загрузку по параметру "iso_3166_1_a2" например "RU"  , тогда в pinia store загрузится одна страна.
                 
        /country/:country
            По данному пути должна совершаться фильтрация стран по iso_3166_1_a2  без запроса на сервер  - локальных данных которые храняться в pinia store
            Если в pinia store данной страны нет, страница должна вызывать 404 ошибку.


## СТЭК

- Vue 3
- TypeScript
- Pinia
## Команда для запуска

- npm install
- npm run dev


### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
