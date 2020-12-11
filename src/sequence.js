import { pipe } from './pipe.js'
import { _literalizeArgs } from './_literalizeArgs.js'
import { _sequence } from './_sequence.js'
import { apply } from './apply.js'

var sequence = pipe(
	_literalizeArgs,
	apply(_sequence)
)

export { sequence }
