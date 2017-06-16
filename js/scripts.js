// scripts.js
// Below is the command that makeing the test of JavaScripts working
var variable = 'test';

console.log(variable); // ok i understand now


var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);   

/*
  and there is an example of block comment
*/

var c = 12,
	h = 8,
	triangleArea = c * h / 2;

console.log('Triangle field with base a: ' + c + ' and height h: ' + h + ' is equal to: ' + triangleArea);

var a = prompt('Enter the value of a'),
	b = prompt('Enter the value of b'),
	value = (a * a) + (2 * a * b) - (b * b);

console.log('The result of this task is equal: ' + value);

var x = value;
if (x > 0)	{
	console.log('wynik dodatni')
} else if (x < 0) {
	console.log('wynik ujemny')
} else  if (x == 0){
	console.log('wynik jest równy zero')
}
