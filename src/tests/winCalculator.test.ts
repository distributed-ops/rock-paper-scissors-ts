import { PlayerMoves, PlayerWinsResult, ResultType } from '../interfaces'
import { calculateWinner } from '../winCalculator'
import { Move } from '../interfaces'

const createMoves = (p1Move: Move, p2Move: Move) => {
  const players = {
    player1: { name: 'p1', play: () => p1Move },
    player2: { name: 'p2', play: () => p2Move },
  }
  return {
    player1Move: { player: players.player1, move: p1Move },
    player2Move: { player: players.player2, move: p2Move },
  }
}

const createBrokenMoves = () => {
  const broken1 = 'broken'
  const broken2 = 'broken2'
  const players = {
    player1: { name: 'p1', play: () => broken1 },
    player2: { name: 'p2', play: () => broken2 },
  }
  return {
    player1Move: { player: players.player1, move: broken1 },
    player2Move: { player: players.player2, move: broken2 },
  }
}

describe('Win Calculation', () => {
  it('rock beats scissors', () => {
    const moves = createMoves(Move.Rock, Move.Scissors)
    const winner = calculateWinner(moves)
    const winningMove = (winner as PlayerWinsResult).move
    expect(winner.kind).toBe(ResultType.PlayerWins)
    expect(winningMove.move).toBe(Move.Rock)
  })

  it('scissors beats paper', () => {
    const moves = createMoves(Move.Scissors, Move.Paper)
    const winner = calculateWinner(moves)
    const winningMove = (winner as PlayerWinsResult).move
    expect(winner.kind).toBe(ResultType.PlayerWins)
    expect(winningMove.move).toBe(Move.Scissors)
  })

  it('paper beats rock', () => {
    const moves = createMoves(Move.Paper, Move.Rock)
    const winner = calculateWinner(moves)
    const winningMove = (winner as PlayerWinsResult).move
    expect(winner.kind).toBe(ResultType.PlayerWins)
    expect(winningMove.move).toBe(Move.Paper)
  })

  it('broken things break', () => {
    const moves = createBrokenMoves()
    expect(() => calculateWinner(moves as any)).toThrowError()
  })

  it.each([Move.Rock, Move.Paper, Move.Scissors])(
    'should draw with equal moves',
    (move: Move) => {
      const moves = createMoves(move, move)
      const winner = calculateWinner(moves)
      expect(winner.kind).toBe(ResultType.Draw)
    }
  )
})
