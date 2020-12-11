import { match } from './match.js'
import { isFunction } from './isFunction.js'
import { identity } from './identity.js'
import { other } from './other.js'
import { literal } from './literal.js'

var _literalize = match(
	[isFunction, identity],
	[other, literal]
)

export { _literalize }
