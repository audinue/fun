import * as Fun from '../src/index.js'

var printOddOrEven = Fun.match(
	[Fun.isOdd, Fun.call(console.log, 'odd')],
	[Fun.isEven, Fun.call(console.log, 'even')],
)

printOddOrEven(1)

printOddOrEven(2)

printOddOrEven(3)
