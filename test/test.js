const { describe, it, expect } = require("@jest/globals");

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    expect(0.6).toBeGreaterThan(0.5)
  })

  it('flaky test 2', () => {
    expect(0.8).toBeGreaterThan(0.7)
  })

  it('flaky test 3', () => {
    expect(0.5).toBeGreaterThan(0.3)
  })

  it('flaky test 4', () => {
    expect(1).toBe(1)
  })

  it('flaky test 5', () => {
    expect(true).toBe(true)
  })
})
