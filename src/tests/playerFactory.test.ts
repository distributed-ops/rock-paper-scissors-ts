import { createPlayers } from '../playerFactory'

describe('Play factory tests', () => {
  it('should create players with random moves', () => {
    const rnd = jest.spyOn(Math, 'random')
    const players = createPlayers()
    players.player1.play()
    players.player2.play()
    expect(rnd).toHaveBeenCalledTimes(2)
  })
})
