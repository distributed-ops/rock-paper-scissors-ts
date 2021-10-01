import * as ouput from '../output'

describe('Output Tests', () => {
  it('clear should call console', () => {
    const clear = jest.spyOn(console, 'clear')
    ouput.clear()
    expect(clear).toHaveBeenCalledTimes(1)
  })

  it('writeline should call console', () => {
    const log = jest.spyOn(console, 'log')
    ouput.writeLine('')
    expect(log).toHaveBeenCalledTimes(1)
  })

  it('writeHorizontalLine should call console', () => {
    const log = jest.spyOn(console, 'log')
    ouput.writeHorizontalLine()
    expect(log).toHaveBeenCalledTimes(1)
  })

  it('writeTitle should call console per word', () => {
    const log = jest.spyOn(console, 'log')
    ouput.writeTitle('1 2 3 4 5 6')
    expect(log).toHaveBeenCalledTimes(6)
  })

  afterEach(() => jest.resetAllMocks())
})
