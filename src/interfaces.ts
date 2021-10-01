export enum Move {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors',
}

export interface Player {
  name: string;
  play: () => Move;
}

export interface Players {
  player1: Player;
  player2: Player;
}

export interface PlayerMove {
  player: Player;
  move: Move;
}

export interface PlayerMoves {
  player1Move: PlayerMove;
  player2Move: PlayerMove;
}

export enum ResultType {
  PlayerWins = 'Player Wins',
  Draw = 'Draw',
}

export type PlayerWinsResult = {
  kind: ResultType.PlayerWins;
  move: PlayerMove;
};

export type DrawResultType = {
  kind: ResultType.Draw;
};

export type Result = PlayerWinsResult | DrawResultType;
