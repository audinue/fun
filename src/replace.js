import * as _ from './core/index.js'

var replace = _.curry(function (pattern, substitution, string) {
	return string.replace(pattern, substitution)
})

export { replace }
