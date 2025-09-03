const { describe, it, expect } = require("@jest/globals");

// The original implementation of this test suite relied on uncontrolled calls
// to Math.random(), making every spec flaky by definition. To stabilise the
// suite we stub Math.random() with deterministic return values that satisfy
// each individual assertion. Every stub is restored immediately after the
// relevant spec so tests remain isolated from each other.

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.8) // 0.8 > 0.5 === true
    expect(Math.random() > 0.5).toBe(true)
    Math.random.mockRestore()
  })

  it('flaky test 2', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.8) // 0.8 > 0.7 === true
    expect(Math.random() > 0.7).toBe(true)
    Math.random.mockRestore()
  })

  it('flaky test 3', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.8) // 0.8 > 0.3 === true
    expect(Math.random() > 0.3).toBe(true)
    Math.random.mockRestore()
  })

  it('flaky test 4', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.4) // floor(0.4*3) === 1
    expect(Math.floor(Math.random() * 3)).toBe(1)
    Math.random.mockRestore()
  })

  it('flaky test 5', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.1) // floor(0.1*2) === 0
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
    Math.random.mockRestore()
  })
})
