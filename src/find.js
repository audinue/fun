import * as _ from './core/index.js'

var find = _.curry(function (callback, array) {
	for (var i = 0, length = array.length; i < length; i++) {
		if (callback(array[i], i, array)) {
			return [i, array[i]]
		}
	}
	return [-1, undefined]
})

export { find }
