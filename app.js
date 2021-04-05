// Modules
// CommonJS, every file is module by defautl
// Modules - Encapsulated code, only share minimum

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativr-flavor')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)