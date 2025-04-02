// Задача 1
// Створіть програму визначення вартості дзвінка по телефону. Ціна за хвилину розмови 2.30 грн. У
// суботу та у неділю надається знижка 20%

// let day
// function calcCostCall(day, time) {
//     let price = 2.3;
//     let cost
//     if(day === 6 || day === 7) {
//     cost = time * (price * 0.8);
//     } else {
//         cost = time * price;
//     }
//     console.log(cost);
// }

// calcCostCall(2, 5);

// Задача 2
// Напишіть програму яка перевіряє, чи є введене ціле число додатним, від’ємним, чи це нуль

let num

function checkNum(num) {
    if(num < 0) {
        console.log(`number is negative`);
    } else if(num > 0) {
        console.log(`number is positive`);
    } else {
        console.log(`number is zero`);

    }
    
}

checkNum(-5);
checkNum(0);

// Задача 3
// Напишіть програму, на вхід якої подається два цілих числа — вік Сашка і вік Тетянки. Програма має
// вивести повідомлення про те, хто є старшим серед них.
// 1)
// let age1 = +prompt(`enter age1`);
// let age2 = +prompt(`enter age2`);

// function compareAge(age1, age2) {
//     if (age1 > age2) {
//         alert(`Age1 is older`);
//     } else if (age2 > age1) {
//         alert(`Age2 is older`)
//     } else {
//     alert(`Age2 is equal to age2`);
//      }
// }

// compareAge(age1, age2);
// 2) стрілкова функ----------------------------------
// let age1 = +prompt("Enter age1:");
// let age2 = +prompt("Enter age2:");

// const compareAge = (age1, age2) => {
//     if (age1 > age2) return alert("Age1 is older");
//     if (age1 < age2) return alert("Age2 is older");
//     return alert("Both are the same age");
// };

// compareAge(age1, age2);
// 3) тернарний оператор--------------------------------------
// let age1 = +prompt("Enter age1:");
// let age2 = +prompt("Enter age2:");

// const compareAge = (age1, age2) => 
//     alert(age1 > age2 ? "Age1 is older" : age1 < age2 ? "Age2 is older" : "Both are the same age");

// compareAge(age1, age2);

// Задача 4
// Підприємство набирає робітників у штат. У вимогах зазначено не менше 5 років робочого стажу та вік
// не більше 40 років. Створіть програму, яка перевіряє, підходить кандидатура за цими параметрам чи
// ні.

// const checkWorkers = (expirence, age) => {
//     if(expirence >= 5 && age < 40) return console.log('You are Ok!');
//     return console.log('You are not Ok!');
// }
// checkWorkers(10, 20);
// checkWorkers(6, 55);