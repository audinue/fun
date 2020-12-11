import { _pipe } from './_pipe.js'
import { _literalizeArgs } from './_literalizeArgs.js'
import { apply } from './apply.js'

var pipe = _pipe(
	_literalizeArgs,
	apply(_pipe)
)

export { pipe }
