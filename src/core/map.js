import { curry } from './curry.js'
import { _map } from './_map.js'

/**
 * Function -> Array -> Array
 */
var map = curry(_map)

export { map }
