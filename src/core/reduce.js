import { curry } from './curry.js'
import { _reduce } from './_reduce.js'

var reduce = curry(_reduce)

export { reduce }
