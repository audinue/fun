import * as _ from './core/index.js'

var push = function () {
	var args = _.toArray(arguments)
	return function (array) {
		return array.concat(args)
	}
}

export { push }
