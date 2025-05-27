import type { BoardBoxType } from "./board";

interface Position {
    x: number,
    y: number
};

interface Movement{
    position: Position,
    reason: string
}

type MovementHistory = Movement[]

const GameState = {
    won: 'WON',
    lost: 'LOST',
    playing: 'PLAYING',
} as const;

type GameState = typeof GameState[keyof typeof GameState];

interface GameDecision {
    position: Position,
    reason: MovementReason,
}

interface ElementToPlace {
    position: Position,
    element: BoardBoxType
}

const MovementReason = {
    winGame: 'WIN_GAME',
    loseGameBecauseOfWumpus: 'LOSE_GAME_BECAUSE_OF_WUMPUS',
    loseGameBecauseOfHole: 'LOSE_GAME_BECAUSE_OF_HOLE',
    loseLifeBecauseOfWumpus: 'LOSE_LIFE_BECAUSE_OF_WUMPUS',
    loseLifeBecauseOfHole: 'LOSE_LIFE_BECAUSE_OF_HOLE',
    targetBox: 'TARGET_BOX',
    nextWinsGame: 'NEXT_WINS_GAME',
    nextGetsGold: 'NEXT_GETS_GOLD',
    throwArrow: 'THROW_ARROW',
    exploration: 'EXPLORATION',
    riskFightingWumpus: 'RISK_FIGHTING_WUMPUS',
    riskFallingHole: 'RISK_FALLING_HOLE',
    tryDefeatingWumpus: 'TRY_DEFEATING_WUMPUS',
    noOptions: 'NO_OPTIONS',
} as const;

type MovementReason = typeof MovementReason[keyof typeof MovementReason];

export type { Position, Movement, MovementHistory, GameState, GameDecision, ElementToPlace };