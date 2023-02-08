// Задание 1: 

// let numb = '1';

// if (isNaN(numb) || typeof numb !== 'number') {
//     console.log('Упс, кажется, вы ошиблись')
// } else {
//     if (numb % 2 != 0) {
//         console.log('нечетное число')
//     } else {
//         console.log('четное число')
//     }
// }

// Задание 2: 

// let x;

// switch (typeof x) {
//     case 'number':
//         console.log("x — число");
//         break;
//     case 'string':
//         console.log("x — строка");
//         break;
//     case 'boolean':
//         console.log("x — логический тип");
//         break;
//     default:
//         console.log('Тип x не определён');
// }

// Задание 3:

// let str = 'Hello';
// let reverseStr = str
// .split("")
// .reverse()
// .join("");

// console.log(reverseStr);

// Задание 4:

// let numb = Math.random() * 100;
// let intNumb = Math.round(numb);

// console.log(intNumb);

// Задание 5:

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(array.length)
// array.map(item => console.log(item))

// Задание 6:

// let arr = [3, 3, 3, 3, 4]
// let result = true

// for(let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//         result = false
//         break
//     }
// }
// console.log(`Массив состоит из одинаковых значений: ${result}`)

/////////////////////////////// Вывод уникальных значений в массиве

// let arr = [1, 2, 3, 1, 4, 3, 5]
// let result = []

// for(let element of arr) {
//     if (!result.includes(element)) {
//         result.push(element)
//     }
// }

// console.log(result)

/////////////////////////////// Повторяющиеся элементы в массиве

// let arr = [1, 2, 3, 1, 4, 3, 5]

// for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) !== i) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// Задание 7:

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'text', '2', null]
// let newArr = arr.filter(item => typeof item === 'number')
// let odd = 0
// let even = 0

// for(let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === 0) {
//         console.log('Число 0')
//     } else if (newArr[i] % 2 !== 0) {
//         odd += 1
//     } else {
//         even +=1
//     }
// }

// console.log(`Количество нечётных чисел: ${odd}, количество чётных чисел: ${even}`)

// Задание 8:

// let myMap = new Map([
//     ['Egor', 24],
//     ['Vany', 33],
//     ['Dima', 27]
// ])

// for (let result of myMap) {
//     let keys = result[0]
//     let values = result[1]
//     console.log(`Ключ — ${keys}, значение — ${values}`)
// }