import * as _ from './core/index.js'
import { _pipe } from './_pipe.js'
import { getArgs } from './getArgs.js'
import { _literalize } from './_literalize.js'

var _literalizeArgs = _pipe(
	getArgs,
	_.map(_literalize)
)

export { _literalizeArgs }
