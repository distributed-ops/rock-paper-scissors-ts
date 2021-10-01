import { NumberOfRounds } from '../constants'
import { play } from '../game'
import * as cli from '../output'
import * as playerFactory from '../playerFactory'
import * as playerMoves from '../moves'
import * as winCalc from '../winCalculator'

describe('Game Tests', () => {
  it('should clear console on new game', () => {
    const clear = jest.spyOn(cli, 'clear')
    play()
    expect(clear).toHaveBeenCalledTimes(1)
  })

  it('should write the title on new game', () => {
    const clear = jest.spyOn(cli, 'writeTitle')
    play()
    expect(clear).toHaveBeenCalledTimes(1)
  })

  it('should write horizontal lines', () => {
    const clear = jest.spyOn(cli, 'writeHorizontalLine')
    play()
    expect(clear).toHaveBeenCalled()
  })

  it('should create players', () => {
    const clear = jest.spyOn(playerFactory, 'createPlayers')
    play()
    expect(clear).toHaveBeenCalled()
  })

  it('should play N moves', () => {
    const clear = jest.spyOn(playerMoves, 'playMoves')
    play()
    expect(clear).toHaveBeenCalledTimes(NumberOfRounds)
  })

  it('should calculate round winners', () => {
    const clear = jest.spyOn(winCalc, 'calculateWinner')
    play()
    expect(clear).toHaveBeenCalledTimes(NumberOfRounds)
  })
})
