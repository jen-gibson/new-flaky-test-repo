const { describe, it, expect } = require("@jest/globals");

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    expect(true).toBe(true)
  })

  it('flaky test 2', () => {
    expect(true).toBe(true)
  })

  it('flaky test 3', () => {
    expect(true).toBe(true)
  })

  it('flaky test 4', () => {
    expect(1).toBe(1)
  })

  it('flaky test 5', () => {
    expect(true).toBe(true)
  })
})
