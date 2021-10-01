import { Move, Players } from './interfaces'

const move = () => Object.values(Move)[Math.floor(Math.random() * 3)]

const createPlayers = (): Players => {
  return {
    player1: { name: 'Player 1', play: move },
    player2: { name: 'Player 2', play: move },
  }
}

export { createPlayers }
