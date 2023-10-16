import { LevelDataEntity } from "sonolus-core";

export function getEntityDataName(entity: LevelDataEntity, name: string) {
    return entity.data.find(data => data.name == name);
}

export enum NoteState {
    Active,
    Inactive,
    Idle
}

/**
 * @name critical : -1 (normal), 1 (critical)
 * @name passivepress : -1 (untap), 0 (press), 1 (tap)
 * @name slide : -1 (no slide), 1 (slide)
 */
export type NoteTypeMeta = [
    critical : -1 | 1,

    passivepress : -1 | 0 | 1,

    slide : -1 | 1
];

/**
 * @name flick : -2 (no flick), -1 (left flick), 0 (straight flick), 1 (right flick)
 */
export type NoteDataMeta = [
    flick : -2 | -1 | 0 | 1,
    size : number,
    x : number,
    y : number
];

export const noteTypeMeta = {
    NormalTapNote: [-1, 1, -1],
    CriticalTapNote: [1, 1, -1],
    NormalFlickNote: [-1, 1, -1],
    CriticalFlickNote: [1, 1, -1],

    NormalTraceNote: [-1, 0, -1],
    CriticalTraceNote: [1, 0, -1],
    NormalFlickTraceNote: [-1, 0, -1],
    CriticalFlickTraceNote: [1, 0, -1],

    NormalSlideStartNote: [-1, 1, 1],
    CriticalSlideStartNote: [1, 1, 1],

    NormalSlideEndNote: [-1, -1, 1],
    CriticalSlideEndNote: [1, -1, 1],
    NormalSlideEndFlickNote: [-1, -1, 1],
    CriticalSlideEndFlickNote: [1, -1, 1],

    NormalSlideTickNote: [-1, 0, 1],
    CriticalSlideTickNote: [1, 0, 1],
    NormalAttachedSlideTickNote: [-1, 0, 1],
    CriticalAttachedSlideTickNote: [1, 0, 1],
} satisfies { [key: string]: NoteTypeMeta; };