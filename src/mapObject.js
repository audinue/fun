import * as _ from './core/index.js'
import { reduceObject } from './reduceObject.js'

var mapObject = _.curry(function (callback, object) {
	return reduceObject(function (result, value, key, object) {
		result[key] = callback(value, key, object)
		return result
	}, {}, object)
})

export { mapObject }
