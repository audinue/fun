import * as _ from './core/index.js'

var _get = function (result, key) {
	return result[key]
}

var get = function () {
	var args = _.toArray(arguments)
	return function (object) {
		return _.reduce(_get, object, args)
	}
}

export { get }
