// Решение основано на методике, когда количество элементов неизвестно заранее или может меняться. Содержит встроенную функцию Number для упрощения кода.

//Декомпозиция задачи:
// Находим все элементы с классом .item-price
// Создаем массив для хранения числовых значений цен
// Убираем пробелы, текст "руб." и приводим строку к числу
// Перебираем каждый элемент и преобразуем его текст в число
// Выводим готовый готовый массив с числовыми значениями цен
// Сложить значения массива
// Соединить итоговое значение массива с html для динамического отображения
// Создать функцию, которая будет вычитать 20% от общей стоимости
// Добавить addEventListener на кнопку ”Использовать купон на 20%”

// // Находим все элементы с классом .item-price
// const priceElements = document.querySelectorAll('.item-price');

// // Создаем массив для хранения числовых значений цен
// const prices = [];

// // Функция для удаления текста "руб." и преобразования строки в число
// function toNum(str) {
//     const num = Number(str.replace(/руб\./g, ""));
//     return num;
// }

// // Перебираем каждый элемент и преобразуем его текст в число
// priceElements.forEach((element) => {
//     const price = toNum(element.innerHTML); // Преобразуем строку в число
//     prices.push(price); // Добавляем число в массив
// });

// // Готовый массив с числовыми значениями цен
// console.log(prices);

// // Сложить значения массива
// const sumOfNumbers = prices.reduce((acc, number) => acc + number, 0);
// console.log(sumOfNumbers);

// // Соединить итоговое значение массива с HTML для динамического отображения
// const totalElement = document.querySelector('.total-price');
// totalElement.innerHTML = `${sumOfNumbers} руб.`;

// // Создать функцию, которая будет вычитать 20% от общей стоимости
// function discount() {
//     const sumDiscount = sumOfNumbers - (sumOfNumbers * 0.2);
//     totalElement.innerHTML = `${sumDiscount} руб.`;
// }

// //Добавить addEventListener на кнопку ”Использовать купон на 20%”
// const coupon = document.querySelector('.coupon');
// coupon.addEventListener('click', discount);


// Решение основано на методике, когда количество элементов известно заранее. Содержит встроенную функцию parseFloat для упрощения кода.


// Находим все элементы с классом .item-price
const elementsPrice = document.querySelectorAll(`.item-price`);

// Сохраняем значения в переменные 
let price1 = elementsPrice[0].innerHTML;
let price2 = elementsPrice[1].innerHTML;
let price3 = elementsPrice[2].innerHTML;
let price4 = elementsPrice[3].innerHTML;

// Убираем пробелы и текст "руб."
function cleanPrice(priceStr) {
    const cleanedPrice = priceStr.replace(/руб\./g, ``).replace(/ /g, ``).trim();
    return cleanedPrice;
}

// Применяем функцию к каждой переменной, перезаписываем их и выводим в консоль
price1 = cleanPrice(price1);
console.log(price1);
price2 = cleanPrice(price2);
console.log(price2);
price3 = cleanPrice(price3);
console.log(price3);
price4 = cleanPrice(price4);
console.log(price4);

// Преобразуем очищенные строки в числа с помощью parseFloat
const num1 = parseFloat(price1);
const num2 = parseFloat(price2);
const num3 = parseFloat(price3);
const num4 = parseFloat(price4);

// Считаем сумму значений
const totalSum = num1 + num2 + num3 + num4;

// Выводим итоговую сумму в консоль
console.log(`Сумма значений: ${totalSum}`);

// Соединить итоговое значение массива с HTML для динамического отображения
const totalElement = document.querySelector(`.total-price`);
totalElement.innerHTML = `${totalSum} руб.`;

// Создать функцию, которая будет вычитать 20% от общей стоимости
function discount() {
    const sumDiscount = totalSum - (totalSum * 0.2);
    totalElement.innerHTML = `${sumDiscount} руб.`;
}

// Добавить addEventListener на кнопку "Использовать купон на 20%"
const coupon = document.querySelector(`.coupon`);
coupon.addEventListener(`click`, discount);
