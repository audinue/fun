import * as _ from './core/index.js'

var filter = _.curry(function (callback, array) {
	return _.reduce(function (result, element, index, array) {
		if (callback(element, index, array)) {
			result.push(element)
		}
		return result
	}, [], array)
})

export { filter }
