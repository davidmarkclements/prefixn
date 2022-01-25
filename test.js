'use strict'
const assert = require('assert')
const prefixn = require('.')
const expectedAssertOpts = { actual: false, expected: true, operator: '==' }

assert.throws(() => prefixn(1), new assert.AssertionError({ message: prefixn.errors.ERR_STR, ...expectedAssertOpts }))

const label = prefixn('PREFIX-')

assert.equal(label(0), 'PREFIX-0')
assert.equal(label(1), 'PREFIX-1')

assert.throws(() => label(1), new assert.AssertionError({ message: prefixn.errors.ERR_USED(1), ...expectedAssertOpts }))
assert.throws(() => label('2'), new assert.AssertionError({ message: prefixn.errors.ERR_INT, ...expectedAssertOpts }))

assert.equal(label(2, 3), 'PREFIX-2')
assert.equal(label(2, 3), 'PREFIX-3')
assert.throws(() => label(2, 3), new assert.AssertionError({ message: prefixn.errors.ERR_USED(3), ...expectedAssertOpts }))

console.log('# all tests pass')
