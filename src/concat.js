import * as _ from './core/index.js'
import { sequence } from './sequence.js'
import { apply } from './apply.js'
import { join } from './join.js'

var concat = function () {
	var _sequence = apply(sequence, _.toArray(arguments))
	return function () {
		return join('', apply(_sequence, _.toArray(arguments)))
	}
}

export { concat }
