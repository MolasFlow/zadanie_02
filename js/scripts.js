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

function getTriangleArea(a, h) {
	if (a <= 0) {
		console.log('Nieprawidłowe dane')
	} else if (h <= 0) {
		console.log('Nieprawidłowe dane')
	} else {
	return (a * h / 2)
	}
}

console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15);

console.log( triangle1Area )

var triangle2Area = getTriangleArea( - 3, 15);

console.log( triangle2Area )

var triangle3Area = getTriangleArea(2, 0);

console.log( triangle3Area )