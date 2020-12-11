import * as _ from './core/index.js'

/**
 * Function -> Array -> Any
 */
var apply = _.curry(function (callback, args) {
	return callback.apply(null, args)
})

export { apply }
