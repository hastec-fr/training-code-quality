let var1
let var2
let var3
let var4
let var5

let myObj = {
	prop1: 'val1',
	prop2: 'val2'
}

function min(x, y) {
	if (x < y) {
		return x
	} else {
		return y
	}
}

function max(x, y) {
	return x < y ? y : x
}

let x = min(1, 3)
console.log('x=' + x)
// console.log(myObj)
