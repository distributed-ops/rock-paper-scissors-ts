import { PlayerMoves, Players } from './interfaces'

const playMoves = (players: Players): PlayerMoves => ({
  player1Move: { player: players.player1, move: players.player1.play() },
  player2Move: { player: players.player2, move: players.player2.play() },
})

export { playMoves }
