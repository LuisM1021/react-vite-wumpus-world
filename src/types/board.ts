import type { Position } from "./game";

interface BoardBox {
    position: Position,
    type: BoardBoxType,
    wind: boolean,
    stench: boolean
}

const BoardBoxType = {
    start: 'START',
    exit: 'EXIT',
    safe: 'SAFE',
    wumpus: 'WUMPUS',
    hole: 'HOLE',
    gold: 'GOLD'
} as const;



type BoardBoxType = typeof BoardBoxType[keyof typeof BoardBoxType];

export type { BoardBox, BoardBoxType };