import * as _ from './core/index.js'
import { apply } from './apply.js'
import { find } from './find.js'

var match = function () {
	var entries = _.toArray(arguments)
	return function () {
		var args = _.toArray(arguments)
		return apply(
			find(function (entry) {
				return apply(entry[0], args)
			}, entries)[1][1],
			args
		)
	}
}

export { match }
