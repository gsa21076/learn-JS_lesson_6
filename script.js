'use strict';

alert('Угадай число от 1 до 100');

//загадываем число
let rnd = Math.floor(Math.random() * 100) + 1;
console.log(rnd);


// ф-ия проверки ввода числа
let isNumber = function (n) {
  // переводит строку в число и проверяет на NaN и infinity
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// ф-ия игра
function game() {
  // loop1:
  let n = prompt('Введи число!');
  console.log(n);
  if (isNumber(n)) {
    n = +n; // перевод в число
    console.log(n);
  }
  if (n == null) {
    alert('Игра окончена!');
  } else {

    // ф-ия сравнения чисел
    function comparison() {
      if (n < 1 || n > 100) {
        alert('Число вне диапазона');
        game();
      } else {
        if (n > rnd) {
          alert('Загаданное число меньше');
          game();
        } else if (n < rnd) {
          alert('Загаданное число больше');
          game();
        } else if (n === rnd) {
          alert('Поздравляю, Вы угадали!!!');
        } else {
          alert('Это не число!');
          game();
        }
      }
    };
    console.dir(comparison);
    return comparison();
  }
}

game();