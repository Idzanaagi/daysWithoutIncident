[![CI](https://github.com/Idzanaagi/daysWithoutIncident/workflows/CI/badge.svg)](https://github.com/Idzanaagi/daysWithoutIncident/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/0a10e9dc56058d18e185/maintainability)](https://codeclimate.com/github/Idzanaagi/daysWithoutIncident/maintainability)

<h1> Дни без инцидентов </h1>
<h2> Пет-проект. Штука для подсчёта промежутка прошедших дней c определённой даты до сегодня (включительно)</h2>

### Стек: JavaScript

### Описание: 
- написала [логику](https://github.com/Idzanaagi/daysWithoutIncident/blob/main/src/incident.js) для взаимодействия с пользователем в разных ситуациях с помощью библиотеки readlne-sync;
- прикрутила возможность [записи](https://github.com/Idzanaagi/daysWithoutIncident/blob/main/src/firstStart.js#L14) и чтения из файла (спасибо модулю fs node.js) для хранения дат;
- повозилась с [форматированием](https://github.com/Idzanaagi/daysWithoutIncident/blob/main/diffrentDate.js) дат и подсчётом разницы;
- оно заработало!

<b> Как оно работает: </b>

после подтверждения, что пользователь готов начать отсчёт в файл записывается текущая дата. При повторном запуске (и подтверждении, что отсчёт надо прекратить) утилита выдаёт количество прошедших дней. 

<b>Как оно выглядит: </b>

[![asciicast](https://asciinema.org/a/4epIpx9lU00DHb0DBv3Tx6NQL.svg)](https://asciinema.org/a/4epIpx9lU00DHb0DBv3Tx6NQL)

<b>Установка:</b>
- склонировать этот репозиторий,
- в папке проекта набрать в терминале make install (для установки зависимостей),
- затем node index.js или make start,
- в любой непонятной ситуации набирать node index.js (или make start),
- make stat показывает количество прошедших дней на данный момент.
