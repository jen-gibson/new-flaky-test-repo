const { describe, it, expect } = require("@jest/globals");

const { sum } = require('./math');

describe('Deterministic Test Suite', () => {
  it('adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  it('handles mixed sign numbers', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it('adds zero properly', () => {
    expect(sum(0, 5)).toBe(5);
  });

  it('adds large numbers', () => {
    expect(sum(1_000_000, 2_000_000)).toBe(3_000_000);
  });
});
