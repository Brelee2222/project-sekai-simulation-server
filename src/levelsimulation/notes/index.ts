import { Note } from "./Note";
import { NormalTraceNote } from "./traceNotes/NormalTraceNote";

export const noteTypes : { [index : string] : typeof Note} = {
    NormalTraceNote
}