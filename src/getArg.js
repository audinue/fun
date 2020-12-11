import * as _ from './core/index.js'

var getArg = function (index) {
	return function () {
		return arguments[index]
	}
}

export { getArg }
