// 1 task 
console.log("Строка");
console.log(123);
console.log(true);
console.log(null);
console.log(undefined); 

// 2 task 
let hours = Number(prompt("Введите часы:"));
let minutes = Number(prompt("Введите минуты:"));

let remainHours = 23 - hours;
let remainMinutes = 60 - minutes;

if (remainMinutes === 60) {
    remainMinutes = 0;
    remainHours++;
}

alert(`До следующего дня осталось ${remainHours} часов ${remainMinutes} минут`); 

// 3 task 
let num = Number(prompt("Введите пятизначное число:"));

let last = num % 10;
let firstPart = (num - last) / 10;

let result = last * 10000 + firstPart;

alert(result); 

// 4 task 
let sales = Number(prompt("Введите сумму продаж за месяц:"));

let salary = 250 + sales * 0.1;

alert(`Зарплата: ${salary}$`);