import { LevelDataEntity } from "sonolus-core";

export enum NoteState {
    Active,
    Inactive,
    Idle
}

export type NoteTypeMeta = number[] & { length: 2 };
export type NoteDataMeta = number[] & { length: 2 };

export const noteTypeMeta = {
    NormalTraceNote: [1, 1],
    CriticalTraceNote: [1, 1],
    NormalFlickTraceNote: [1, 1],
    CriticalFlickTraceNote: [1, 1],
    NormalTapNote: [1, 1],
    CriticalTapNote: [1, 1],
    NormalFlickNote: [1, 1],
    CriticalFlickNote: [1, 1],
    NormalSlideStartNote: [1, 1],
    CriticalSlideStartNote: [1, 1],
    NormalSlideEndNote: [1, 1],
    CriticalSlideEndNote: [1, 1],
    NormalSlideEndFlickNote: [1, 1],
    CriticalSlideEndFlickNote: [1, 1]
} satisfies { [key: string]: NoteTypeMeta; };

export function getEntityDataName(entity: LevelDataEntity, name: string) {
    return entity.data.find(data => data.name == name);
}