import * as _ from './core/index.js'

var call = function () {
	var previous = _.toArray(arguments)
	return function () {
		var next = previous.concat(_.toArray(arguments))
		return next[0].apply(null, next.slice(1))
	}
}

export { call }
