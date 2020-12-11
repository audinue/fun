var _reduce = function (callback, result, array) {
	for (var i = 0, length = array.length; i < length; i++) {
		result = callback(result, array[i], i, array)
	}
	return result
}

export { _reduce }
