let number = 4936;
let ones = number % 10;
console.log('ones place is ' + ones);

number = (number - ones) / 10;
let tens = number % 10;
console.log('tens place is ' + tens);

number = (number - tens) / 10;
let hundreds = number % 10;
console.log('hundreds place is '+ hundreds);

number = (number - hundreds) / 10;
let thousands = number % 10;
console.log('thousands place is ' + thousands);