import * as _ from './core/index.js'

var divide = _.curry(function (left, right) {
	return left / right
})

export { divide }
