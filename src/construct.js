import * as _ from './core/index.js'
import { isFunction } from './isFunction.js'
import { isArray } from './isArray.js'
import { isObject } from './isObject.js'
import { mapObject } from './mapObject.js'

/**
 * Any -> Any -> Any
 */
var construct = function (object) {
	return function () {
		var args = _.toArray(arguments)
		var construct = function (value) {
			if (isFunction(value)) {
				return value.apply(null, args)
			} else if (isArray(value)) {
				return _.map(construct, value)
			} else if (isObject(value)) {
				return mapObject(construct, value)
			} else {
				return value
			}
		}
		return construct(object)
	}
}

export { construct }
