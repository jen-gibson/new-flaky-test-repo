const { describe, it, expect } = require("@jest/globals");

// The original implementation of this test suite asserted directly on the
// output of `Math.random()`, causing nondeterministic behaviour and flaky CI
// runs.  Each test has been rewritten so that the outcome of `Math.random()` is
// controlled with `jest.spyOn`, making the suite deterministic and reliable.

describe('Stable Test Suite', () => {
  it('stable test 1 – random greater than 0.5', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.6);
    expect(Math.random() > 0.5).toBe(true);
    Math.random.mockRestore();
  });

  it('stable test 2 – random greater than 0.7', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9);
    expect(Math.random() > 0.7).toBe(true);
    Math.random.mockRestore();
  });

  it('stable test 3 – random greater than 0.3', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.4);
    expect(Math.random() > 0.3).toBe(true);
    Math.random.mockRestore();
  });

  it('stable test 4 – floor(random * 3) equals 1', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5); // 0.5 * 3 = 1.5 -> floor = 1
    expect(Math.floor(Math.random() * 3)).toBe(1);
    Math.random.mockRestore();
  });

  it('stable test 5 – boolean lookup returns true', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.2); // 0.2 * 2 = 0.4 -> floor = 0
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true);
    Math.random.mockRestore();
  });
});
