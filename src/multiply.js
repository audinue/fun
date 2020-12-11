import * as _ from './core/index.js'

var multiply = _.curry(function (left, right) {
	return left * right
})

export { multiply }
