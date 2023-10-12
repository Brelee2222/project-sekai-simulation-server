import { Note } from "./Note";
import { NormalTraceNote } from "./traceNotes/NormalTraceNote";
import { CriticalTraceNote } from "./traceNotes/CriticalTraceNote";

// TODO: figure out hitbox top and bottom
export const hitboxTop = 10;
export const hitboxBottom = -10;

// TODO: fill
export const noteTypes : { [index : string] : typeof Note} = {
    NormalTraceNote,
    CriticalTraceNote
}