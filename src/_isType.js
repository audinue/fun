import * as _ from './core/index.js'

var _isType = _.curry(function (type, value) {
	return typeof value === type
})

export { _isType }
