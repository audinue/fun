import * as Fun from '../src/index.js'

var firstNameByIndex = Fun.get(0)

var lastNameByIndex = Fun.get(1)

// [String, String] -> { firstName: String, lastName: String }
var constructUserObject = Fun.construct({
	firstName: firstNameByIndex,
	lastName: lastNameByIndex
})

var firstNameByKey = Fun.get('firstName')

var lastNameByKey = Fun.get('lastName')

// { firstName: String, lastName: String } -> [String, String]
var constructUserRecord = Fun.construct([
	firstNameByKey, lastNameByKey
])

var userObject = constructUserObject(['John', 'Doe'])

var userRecord = constructUserRecord(userObject)

console.log(userObject)

console.log(userRecord)
