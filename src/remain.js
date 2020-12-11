import * as _ from './core/index.js'

var remain = _.curry(function (left, right) {
	return left % right
})

export { remain }
