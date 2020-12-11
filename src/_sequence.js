import * as _ from './core/index.js'

var _sequence = function () {
	var callbacks = _.toArray(arguments)
	return function () {
		var args = _.toArray(arguments)
		return _.map(function (callback) {
			return callback.apply(null, args)
		}, callbacks)
	}
}

export { _sequence }
