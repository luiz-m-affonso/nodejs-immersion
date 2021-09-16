const assert = require('assert')
const {
  getPeople
} = require('./service')

describe('Tests', function () {
  it('Must search R2D2 with correct format', async() => {
    const expected = [{
      name: 'R2-D2',
      weight: '96',
    }]
    const baseName = `R2D2`
    const result = await getPeople(baseName)
    assert.deepEqual(result, expected)
  })
})