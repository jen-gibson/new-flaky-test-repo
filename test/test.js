const { describe, it, expect } = require("@jest/globals");

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9)
    expect(Math.random() > 0.5).toBe(true)
    Math.random.mockRestore()
  })

  it('flaky test 2', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9)
    expect(Math.random() > 0.7).toBe(true)
    Math.random.mockRestore()
  })

  it('flaky test 3', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9)
    expect(Math.random() > 0.3).toBe(true)
    Math.random.mockRestore()
  })

  it('flaky test 4', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5) // 0.5 * 3 == 1.5 -> floor -> 1
    expect(Math.floor(Math.random() * 3)).toBe(1)
    Math.random.mockRestore()
  })

  it('flaky test 5', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.3) // 0.3 * 2 == 0.6 -> floor -> 0
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
    Math.random.mockRestore()
  })
})
