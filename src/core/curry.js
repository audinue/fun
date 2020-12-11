import { _fill } from './_fill.js'
import { toArray } from './toArray.js'
import { _map } from './_map.js'
import { _some } from './_some.js'

var __ = {}

var is__ = function (value) {
	return value === __
}

var curry = function (callback) {
	var curried = function (previous) {
		return function () {
			var more = toArray(arguments)
			var next = _map(function (argument) {
				return is__(argument)
					? more.length
						? more.shift()
						: __
					: argument
			}, previous)
			return _some(is__, next)
				? curried(next)
				: callback.apply(null, next)
		}
	}
	return curried(_fill(__, undefined, undefined, Array(callback.length)))
}

export { __, curry }
