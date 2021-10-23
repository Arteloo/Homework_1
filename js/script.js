"use strict"
function zad1() {
let fnumber = Number(prompt('Введите число для перевода', 872));
let notation = Number(prompt('Введите систему счисления', 8));
if (Number.isNaN(fnumber)) {
    alert('Неправильный ввод');
}
else if (Number.isNaN(notation)) {
    alert('Некорректный ввод');
}
else {
    let parsedd = fnumber.toString(notation)
    alert(parsedd);
}
};
zad1();
function zad2() {
alert('Задача №2');
let num1 = Number(prompt('Введите число', 100));
let num2 = Number(prompt('Введите второе число', 5));
if (Number.isNaN(num1)) {
    alert('Некорректный ввод');
}
else if (Number.isNaN(num2)) {
    alert('Некорректный ввод');
}
else {
    console.log(`Ответ: ${num1 + num2}, ${num1 / num2}`);
} 
}
zad2();
function zad3() {
alert('Задача №3');
let arr_length = Number(prompt('Введи длину массива', 5));
if (Number.isNaN(arr_length)) {
    alert('Некорректный ввод!');
}
else { 
    let arr = [];
    while(arr_length > 0) {
        arr.push(arr_length--);
    }
for (let i = 1; i <= arr.length; i++) {
    if ((confirm(`${arr[i-1]}, продолжить?`)) == false) {
        alert(`Итерация закончилась на числе ${arr[i-1]}`);
        break;
        } else  {
            if (i == arr.length ) {
                alert('Весь массив был проитерирован');
            }
        }
    }
 }
}
zad3();