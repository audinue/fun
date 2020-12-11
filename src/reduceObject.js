import * as _ from './core/index.js'

var reduceObject = _.curry(function (callback, result, object) {
	for (var key in object) {
		result = callback(result, object[key], key, object)
	}
	return result
})

export { reduceObject }
