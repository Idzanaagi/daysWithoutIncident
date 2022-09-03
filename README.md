# daysWithoutIncident

[![CI](https://github.com/Idzanaagi/daysWithoutIncident/workflows/CI/badge.svg)](https://github.com/Idzanaagi/daysWithoutIncident/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/0a10e9dc56058d18e185/maintainability)](https://codeclimate.com/github/Idzanaagi/daysWithoutIncident/maintainability)

Штука для подсчёта промежутка прошедших дней. Максимально базовая версия

Как работает: после запуска утилиты (и подтверждения, что пользователь готов начать отсчёт) записывается дата. При повторном запуске (и подтверждении, что отсчёт надо пректратить) утилита выдаёт количество прошедших дней. 

Установка:
свежая нода глобально,
склонировать этот репозиторий,
в папке проекта набрать make install (для установки зависимостей),
в корне набрать node index.js или make start,
в любой непонятной ситуации набирать node index.js (или make start),
make stat показывает количество прошедших дней на данный момент

### Asciinema
### First start
[![asciicast](https://asciinema.org/a/8HwaIfcZKSCe7ZO3UPU9dWIVd.svg)](https://asciinema.org/a/8HwaIfcZKSCe7ZO3UPU9dWIVd)
### Second run. Get number of days elapsed 
[![asciicast](https://asciinema.org/a/4epIpx9lU00DHb0DBv3Tx6NQL.svg)](https://asciinema.org/a/4epIpx9lU00DHb0DBv3Tx6NQL)
