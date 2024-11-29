const name = 'Alice';
const age = 25;
const city = 'New York';

console.log(name);
console.log(age);
console.log(city);

// =============================================

const width = 5;
const height = 10;
const area = width * height;
console.log('Площа прямокутника складає: ' + area);

// =============================================

const firstName = 'John';
const lastName = 'Doe';
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// =============================================

let score = 50;
score += 10;
score -= 5;
score *= 2;
console.log(score);

// ============================================

const pi = 3.14;
let radius = 7;
let circumference = 2 * radius * pi;
console.log(circumference);

// ============================================

const productName = 'Laptop';
const productPrice = 1000;
const productQuantity = 3;
console.log(
  `Вы заказали ${productQuantity} ноутбука по цене ${productPrice}$ каждый. Итоговая стоимость: ${productPrice * productQuantity}$.`
);

// ============================================

let a = 5;
let b = 10;
console.log('До обмена: а =', a, ', b =', b);
let temp = a;
a = b;
b = temp;
console.log('После обмена: а =', a, ', b =', b);

// ============================================

const number1 = 150;
const number2 = 200;
const isGreater = number1 > number2;
console.log(isGreater);

// ============================================

const num1 = 10;
const num2 = 20;
const text = 'Результат сложения: ';
const result = `${text}${num1 * num2}`;
console.log(result);

// ===========================================

const principal = 1000;
const rate = 5;
const time = 2;
const interest = (principal * rate * time) / 100;
console.log(interest);

// ===========================================

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
