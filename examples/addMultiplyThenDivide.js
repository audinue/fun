import * as Fun from '../src/index.js'

var addMultiplyThenDivide = Fun.pipe(
	Fun.add(1),
	Fun.multiply(2),
	Fun.divide(Fun.__, 8)
)

console.log(addMultiplyThenDivide(1))
