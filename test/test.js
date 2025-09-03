


describe('Flaky Test Suite', () => {
  let randomSpy

  afterEach(() => {
    randomSpy?.mockRestore()
    randomSpy = undefined
  })

  it('flaky test 1 – deterministic', () => {
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.6)
    expect(Math.random() > 0.5).toBe(true)
  })

  it('flaky test 2 – deterministic', () => {
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.8)
    expect(Math.random() > 0.7).toBe(true)
  })

  it('flaky test 3 – deterministic', () => {
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.9)
    expect(Math.random() > 0.3).toBe(true)
  })

  it('flaky test 4 – deterministic', () => {
    // Use value well inside (1/3, 2/3) interval to eliminate floating-point boundary risk.
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.7)
    expect(Math.floor(Math.random() * 3)).toBe(2)
  })

  it('flaky test 5 – deterministic', () => {
    // Use 0.1 instead of 0 to stay clear of boundary conditions and index 0.
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.1)
    expect([true, false][Math.floor(Math.random() * 2)]).toBe(true)
  })
})
