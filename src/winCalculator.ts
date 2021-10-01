import { DefaultError } from './constants'
import { PlayerMoves, Result, ResultType } from './interfaces'

const calculateWinner = (moves: PlayerMoves): Result => {
  if (moves.player1Move.move === moves.player2Move.move)
    return {
      kind: ResultType.Draw,
    }
  switch (moves.player1Move.move) {
    case 'Rock':
      return moves.player2Move.move === 'Scissors'
        ? {
            kind: ResultType.PlayerWins,
            move: moves.player1Move,
          }
        : {
            kind: ResultType.PlayerWins,
            move: moves.player2Move,
          }
    case 'Paper':
      return moves.player2Move.move === 'Rock'
        ? {
            kind: ResultType.PlayerWins,
            move: moves.player1Move,
          }
        : {
            kind: ResultType.PlayerWins,
            move: moves.player2Move,
          }
    case 'Scissors':
      return moves.player2Move.move === 'Paper'
        ? {
            kind: ResultType.PlayerWins,
            move: moves.player1Move,
          }
        : {
            kind: ResultType.PlayerWins,
            move: moves.player2Move,
          }
    default:
      throw new Error(DefaultError)
  }
}

export { calculateWinner }
