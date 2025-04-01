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
