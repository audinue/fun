var entries = function (object) {
	var result = []
	for (var key in object) {
		if (object.hasOwnProperty(key)) {
			result.push([key, object[key]])
		}
	}
	return result
}

export { entries }
