var _some = function (callback, array) {
	for (var i = 0, length = array.length; i < length; i++) {
		if (callback(array[i], i, array)) {
			return true
		}
	}
	return false
}

export { _some }
