import { LevelDataEntity } from "sonolus-core";
import { Note } from "./Note";
import { NormalTraceNote } from "./pressNotes/NormalTraceNote";
import { getEntityDataName } from "..";
import { Touch } from "../geometry/Touch";

export function getFlickDirection(entityData : LevelDataEntity) {
    return (getEntityDataName(entityData, "direction") as { value : number }).value;
}

// fix
// Math.tan(touch.vpos.x/touch.vpos.y)
export function flickingCorrectDirection(touch : Touch, direction : number) : boolean {
    return true;
}

// fix
export function flicking(touch : Touch) : boolean {
    return touch.vpos.distance() > 1;
}

export const noteTypes : { [index : string] : typeof Note} = {
    NormalTraceNote
}

export const noteMeta = {
    NormalTraceNote : [ 1, 1 ],
    CriticalTraceNote : [ 1, 1 ],
    NormalFlickTraceNote : [ 1, 1 ],
    CriticalFlickTraceNote : [ 1, 1 ],
    NormalTapNote : [ 1, 1 ],
    CriticalTapNote : [ 1, 1 ],
    NormalFlickNote : [ 1, 1 ],
    CriticalFlickNote : [ 1, 1 ]
} satisfies { [key : string] : number[] & { length : 2 } };