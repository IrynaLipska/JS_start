// let textHello = "Hello";

// console.log(textHello);

// let userName = prompt("Enter your name");
// console.log(userName);
// alert(`Hello , ${userName}`);

// const today = 2025;
// let userBorn = prompt("When you was born?");
// console.log(today - userBorn);
// alert(`You are ${today - userBorn} years old`);

// let side = prompt(`enter the length of the side of the square:`);
// alert(`The perimetr of the square is ${side * 4}`);
//--------------------------------------------------------

// function calcSumm(numOne, numTwo) {
//     let result = 1;
//     for (let i = 0; i < numTwo; i++) {
//         result *= numOne;
//     }
//     return result;
// }

// console.log(calcSumm(2, 3));

//-------------------------------- з рекурсієй-----------------------------

// function calcSumm1(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSumm1(numOne, numTwo - 1);
//     }
// }
// console.log(calcSumm1(5, 3));

// let userInfo = {
//     name: "II",
//     age: 30,
//     address: {
//         city: "Kyiv"
//     }
// }
// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }
// for (const key in userInfo.address) {
//     console.log(userInfo.address[key]);
// }


// Задача 1.
// Задано два цілих числа. Знайти та вивести на екран їх суму, суму їх квадратів та квадрат їх суми

// let num1 = prompt("num1 =");
// let num2 = prompt("num2 =");

// function exercise(num1, num2) {
//     let sum = +num1 + +num2;
//     let sum1 = Math.pow(num1, 2) + +num2;
//     let sum2 = Math.pow(sum1, 2);

//     console.log(sum);
//     console.log(sum1);
//     console.log(sum2);
// }

// exercise(num1, num2);


// Задача 2.
// За даними значеннями довжини сторін трикутника a, b, c (дійсні числа) обчислити його периметp

// let a = Number(prompt("side a ="));
// let b = Number(prompt("side b ="));
// let c = Number(prompt("side c ="));

// function calkPerimetr(a, b, c ) {
//     let perimetr = a + b + c;
//     // return perimetr
//     console.log(perimetr);
// }

// calkPerimetr(a, b, c);

// Задача 3.
// Задано довжини катетів прямокутного трикутника (дійсні числа). Знайти довжину гіпотенузи.

// function calcSide(a, b) {
//     let res = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     console.log(res);
// }
// calcSide(2, 3);

// Задача 4.
// Задано радіус кола (дійсне число). Знайти довжину сторони квадрата, вписаного в це коло

// let radius = +prompt(`Radius = `);
// function calcSideSquare(radius) {
//     side = (radius * 2) / Math.sqrt(2);
//     return side;
// }
// alert(`the side of the square ${calcSideSquare(radius)}`);

// Задача 5.
// Задано координати двох точок на площині. Знайти координати середини відрізка, що їх сполучає.

// let x1 = +prompt(`x1 = `);
// let x2 = +prompt(`x2 = `);
// let y1 = +prompt(`y1 = `);
// let y2 = +prompt(`y2 = `);

// function calcMidpoint(x1, x2, y1, y2) {
//     let x = (x1 + x2) / 2;
//     let y = (y1 + y2) / 2;
// return {x, y};
// }

// let midpoint = calcMidpoint(x1, x2, y1, y2);
// alert(`Midpoint is (${midpoint.x}, ${midpoint.y})`);

// ------------------- 2 var
// const calcMidpoint = ([x1, y1], [x2, y2]) => ({
//     x : ((x1 + x2) / 2),    //об'єкт (ключ: значення)
//     y : ((y1 + y2) / 2)
// });

// const midpoint = calcMidpoint([x1, y1], [x2, y2]);
// alert(`Midpoint is (${midpoint.x}, ${midpoint.y})`);

// Задача 6.
// Задано довжини двох сторін трикутника та кут між ними (кут задано в радіанах). Знайти площу
// трикутника.

function calcTriangleArea(a, b, angle) {
    const area = a * b * Math.sin(angle) / 2;
    console.log(area);
}
calcTriangleArea(2, 3, 0.5);

//Задача 10*.
// Переставити місцями значення двох змінних, не використовуючи допоміжну змінну.

// function exercise10(num1, num2) {
//     let a = num1;
//     let b = num2;
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log(a, b);
//     }

// В JavaScript, існує можливість поміняти значення двох змінних між собою, без створення додаткової
// змінної чи додаткової маніпуляції зі значеннями, тому дана задача мовою JavaScript розв’язується
// простіше.
// Алгоритм:
// 1. Початок
// 2. Ввести з клавіатури a, b
// 3. Поміняти змінні між собою, [a, b] = [b, a]
// 4. Вивести на екран значення a та b
// 5 Кінець

function exercise10(num1, num2) {
    let a = num1;
    let b = num2;
    [a, b] = [b, a];
    console.log(a, b);
    }