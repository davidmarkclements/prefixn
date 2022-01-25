'use strict'
const assert = require('assert')

const ERR_INT = (n) => `n:${n} must be an integer`
const ERR_STR = 'prefix must be an string'
const ERR_USED = (n) => `n:${n} already has a label generated`

module.exports = function prefixn (prefix = '') {
  assert(typeof prefix === 'string', ERR_STR)
  const labelled = new Set()
  return function label (...nn) {
    let c = 0
    let n = -1
    assert(nn.length > 0, ERR_INT())
    while (c < nn.length) {
      n = nn[c]
      assert(Number.isInteger(n), ERR_INT(n))
      if (labelled.has(n)) {
        n = nn[c++]
      } else {
        break
      }
    }
    assert(labelled.has(n) === false, ERR_USED(n))
    labelled.add(n)
    const tag = (...args) => String.raw(...args) + prefix + n
    tag.toString = tag[Symbol.toPrimitive] = () => prefix + n
    return tag
  }
}

module.exports.errors = { ERR_INT, ERR_USED, ERR_STR }
