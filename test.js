'use strict'
const assert = require('assert')
const prefixn = require('.')
const expectedAssertOpts = { actual: false, expected: true, operator: '==' }

assert.throws(() => prefixn(1), new assert.AssertionError({ message: prefixn.errors.ERR_STR, ...expectedAssertOpts }))

const label = prefixn(':PREFIX-')

assert.equal(label(0), ':PREFIX-0')
assert.equal(label(1), ':PREFIX-1')

assert.throws(() => label(1), new assert.AssertionError({ message: prefixn.errors.ERR_USED(1), ...expectedAssertOpts }))
assert.throws(() => label('2'), new assert.AssertionError({ message: prefixn.errors.ERR_INT('2'), ...expectedAssertOpts }))

assert.equal(label(2, 3) + '', ':PREFIX-2')
assert.equal(label(2, 3) + '', ':PREFIX-3')
assert.throws(() => label(2, 3), new assert.AssertionError({ message: prefixn.errors.ERR_USED(3), ...expectedAssertOpts }))

assert.equal(label(5)`ok here we ${'go'}`, 'ok here we go:PREFIX-5')
assert.equal(label(4)`ok here we ${'go'}`, 'ok here we go:PREFIX-4')

assert.equal(label(6, 8, 13), ':PREFIX-6')
assert.equal(label(6, 8, 13), ':PREFIX-8')
assert.equal(label(6, 8, 13), ':PREFIX-13')

console.log('# all tests pass')
