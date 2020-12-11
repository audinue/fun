import * as _ from './core/index.js'

var substract = _.curry(function (left, right) {
	return left - right
})

export { substract }
