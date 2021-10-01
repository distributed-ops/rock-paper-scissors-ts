import { AppTitle, NoWinner, NumberOfRounds } from './constants'
import { clear, writeHorizontalLine, writeLine, writeTitle } from './output'
import { calculateWinner } from './winCalculator'
import { createPlayers } from './playerFactory'
import { playMoves } from './moves'
import { ResultType } from './interfaces'

const play = () => {
  clear()
  writeTitle(AppTitle)
  writeLine(`Playing ${NumberOfRounds} Rounds...`)
  writeHorizontalLine()

  const players = createPlayers()

  for (let round = 1; round <= NumberOfRounds; round++) {
    writeLine(`Round ${round}`)
    const moves = playMoves(players)
    const winner = calculateWinner(moves)
    writeLine(`${players.player1.name} plays ${moves.player1Move.move}`)
    writeLine(`${players.player2.name} plays ${moves.player2Move.move}`)
    switch (winner.kind) {
      case ResultType.PlayerWins:
        writeLine(`${winner.move.player.name} wins`)
        break
      case ResultType.Draw:
        writeLine(NoWinner)
        break
    }
    writeHorizontalLine()
  }
}

export { play }
