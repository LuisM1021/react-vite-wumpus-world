import type { Position } from "./game";

interface Agent {
    lifesNumber: number, 
    arrowsNumber: number,
    currentPosition: null,
    random: number,
    hasGold: boolean
}

interface AgentMatrixBox {
    position: Position,
    gold: typeof AgentMatrixBoxType,
    exit: typeof AgentMatrixBoxType,
    safe: typeof AgentMatrixBoxType,
    hole: typeof AgentMatrixBoxTypeEnemy,
    wumpus: typeof AgentMatrixBoxTypeEnemy,
    wind: typeof AgentMatrixBoxType,
    stench: typeof AgentMatrixBoxType
}

const AgentMatrixBoxTypeEnemy = {
    yes: 'YES',
    no: 'NO',
    unknown: 'UNKNOWN',
    possible: 'POSSIBLE'
} as const;

const AgentMatrixBoxType ={
    yes: 'YES',
    no: 'NO',
    unknown: 'UNKNOWN'
} as const;

type AgentMatrixBoxTypeEnemy = typeof AgentMatrixBoxTypeEnemy[keyof typeof AgentMatrixBoxTypeEnemy];
type AgentMatrixBoxType = typeof AgentMatrixBoxType[keyof typeof AgentMatrixBoxType];

export type { Agent, AgentMatrixBox, AgentMatrixBoxType, AgentMatrixBoxTypeEnemy };