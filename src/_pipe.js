import * as _ from './core/index.js'

var __pipe = function (result, callback) {
	return callback(result)
}

var _pipe = function () {
	var callbacks = _.toArray(arguments)
	var head = callbacks[0]
	var tail = callbacks.slice(1)
	return function () {
		return _.reduce(__pipe, head.apply(null, arguments), tail)
	}
}

export { _pipe }
