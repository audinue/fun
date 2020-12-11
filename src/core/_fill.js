var _fill = function (element, start, end, array) {
	var length = array.length
	start = start === undefined
		? 0
		: start < 0
			? length + start
			: start
	end = end === undefined
		? length
		: end < 0
			? length + end
			: end
	start = Math.max(start, 0)
	end = Math.min(end, length)
	var result = array.slice(0)
	for (var i = start; i < end; i++) {
		result[i] = element
	}
	return result
}

export { _fill }
