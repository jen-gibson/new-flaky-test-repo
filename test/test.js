const { describe, it, expect } = require("@jest/globals");

describe('Flaky Test Suite', () => {
  it('flaky test 1', () => {
    const _spy = jest.spyOn(Math, 'random').mockReturnValue(0.6);
    expect(Math.random() > 0.5).toBe(true);
    _spy.mockRestore();
  })

  it('flaky test 2', () => {
    const _spy = jest.spyOn(Math, 'random').mockReturnValue(0.8);
    expect(Math.random() > 0.7).toBe(true);
    _spy.mockRestore();
  })

  it('flaky test 3', () => {
    const _spy = jest.spyOn(Math, 'random').mockReturnValue(0.4);
    expect(Math.random() > 0.3).toBe(true);
    _spy.mockRestore();
  })

  it('flaky test 4', () => {
    const _spy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
    expect(Math.floor(Math.random() * 3)).toBe(1);
    _spy.mockRestore();
  })

  it('flaky test 5', () => {
    const _spy = jest.spyOn(Math, 'random').mockReturnValue(0.3);
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true);
    _spy.mockRestore();
  })
})
