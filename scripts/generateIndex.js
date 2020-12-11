import * as _ from '../src/core/index.js'
import { readdir, writeFile } from 'fs'
import { pipe } from '../src/pipe.js'
import { replace } from '../src/replace.js'
import { not } from '../src/not.js'
import { filter } from '../src/filter.js'
import { matches } from '../src/matches.js'
import { push } from '../src/push.js'
import { concat } from '../src/concat.js'
import { identity } from '../src/identity.js'
import { join } from '../src/join.js'
import { noop } from '../src/noop.js'

var dirname = pipe(
	import.meta.url,
	replace(/^file:\/\//, ''),
	replace(/[^\\/]+$/, '')
)()

var write = _.curry(function (file, content) {
	writeFile(file, content, noop)
})

var generate = function (error, files) {
	pipe(
		files,
		filter(matches(/\.js$/)),
		filter(not(matches(/^_/))),
		filter(not(matches(/^index.js$/))),
		push('core/index.js'),
		_.map(concat("export * from './", identity, "'\n")),
		join(''),
		write(dirname + '/../src/index.js')
	)()
}

readdir(dirname + '/../src', generate)
