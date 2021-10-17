"use strict"

let in_number = prompt('Введите число для перевода', 872);
let in_notation = prompt('Введите систему счисления', 8);
let fnumber = Number(in_number);
let fnotation = Number(in_notation);
if (Number.isNaN(fnumber) == true) {
    alert('Неправильный ввод');
}
else if (Number.isNaN(fnotation) == true) {
    alert('Некорректный ввод');
}
else {
    let parsed = fnumber.toString(fnotation);
    alert(parsed);
}
alert('Задача №2');
let adnum1 = prompt('Введите число', 100);
let adnum2 = prompt('Введите второе число', 5);
let plnum1 = Number(adnum1);
let plnum2 = Number(adnum2);
if (Number.isNaN(plnum1) == true) {
    alert('Некорректный ввод');
}
else if (Number.isNaN(plnum2) == true) {
    alert('Некорректный ввод');
}
else {
    let pls = (plnum1 + plnum2);
    let del = (plnum1 / plnum2);
    console.log(`Ответ: ${pls}, ${del}`);
} 

alert('Задача №3');
let arrl = prompt('Введи длину массива', 5);
let arr_len = Number(arrl);
if (Number.isNaN(arr_len) == true) {
    alert('Некорректный ввод!');
}
else { 
    let arr = [];
    while(arr_len > 0) {
        arr.push(arr_len--);
    }
console.log(arr);
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