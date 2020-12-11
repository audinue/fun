import * as _ from './core/index.js'

var matches = _.curry(function (regExp, string) {
	return string.match(regExp)
})

export { matches }
