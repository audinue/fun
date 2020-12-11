import * as _ from './core/index.js'

/**
 * Number -> Number -> Number
 */
var add = _.curry(function (left, right) {
	return left + right
})

export { add }
