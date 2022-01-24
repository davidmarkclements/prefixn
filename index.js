'use strict'
const assert = require('assert')

const ERR_INT = 'n must be an integer'
const ERR_STR = 'prefix must be an string'
const ERR_USED = (n) => `n:${n} has already generated a label`

module.exports = function prefixn (prefix = '') {
  assert(typeof prefix === 'string', ERR_STR)
  const labelled = new Set()
  return function label (n) {
    assert(Number.isInteger(n), ERR_INT)
    assert(labelled.has(n) === false, ERR_USED(n))
    labelled.add(n)
    return prefix + n
  }
}

module.exports.errors = { ERR_INT, ERR_USED, ERR_STR }