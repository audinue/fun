import * as _ from './core/index.js'

var not = _.curry(function (callback, value) {
	return !callback(value)
})

export { not }
