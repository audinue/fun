import * as _ from './core/index.js'

var join = _.curry(function (separator, array) {
	return array.join(separator)
})

export { join }
