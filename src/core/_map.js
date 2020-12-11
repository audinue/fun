import { _reduce } from './_reduce.js'

var _map = function (callback, array) {
	return _reduce(function (result, element, index, array) {
		result.push(callback(element, index, array))
		return result
	}, [], array)
}

export { _map }
