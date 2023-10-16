import { Note } from "./Note";
import { NormalTraceNote } from "./traceNotes/NormalTraceNote";
import { CriticalTraceNote } from "./traceNotes/CriticalTraceNote";
import { NormalFlickTraceNote } from "./traceNotes/flickTraceNotes/NormalFlickTraceNote";
import { CriticalFlickTraceNote } from "./traceNotes/flickTraceNotes/CriticalFlickTraceNote";
import { NormalTapNote } from "./tapNotes/NormalTapNote";
import { CriticalTapNote } from "./tapNotes/CriticalTapNote";
import { NormalFlickNote } from "./tapNotes/singleFlickNotes/NormalFlickNote";
import { CriticalFlickNote } from "./tapNotes/singleFlickNotes/CriticalFlickNote";
import { NormalSlideStartNote } from "./slideStartNotes/NormalSlideStartNote";
import { CriticalSlideStartNote } from "./slideStartNotes/CriticalSlideStartNote";
import { NormalSlideEndNote } from "./slideEndNotes/NormalSlideEndNote";
import { CriticalSlideEndNote } from "./slideEndNotes/CriticalSlideEndNote";
import { NormalSlideEndFlickNote } from "./slideEndNotes/slideEndFlickNotes/NormalSlideEndFlickNote";
import { CriticalSlideEndFlickNote } from "./slideEndNotes/slideEndFlickNotes/CriticalSlideEndFlickNote";
import { HiddenSlideTickNote } from "./slideTickNotes/HiddenSlideTickNote";
import { NormalSlideTickNote } from "./slideTickNotes/visibleSlideTickNotes/NormalSlideTickNote";
import { CriticalSlideTickNote } from "./slideTickNotes/visibleSlideTickNotes/CriticalSlideTickNote";
import { NormalAttachedSlideTickNote } from "./slideTickNotes/visibleSlideTickNotes/attachedSlideTickNotes/NormalAttachedSlideTickNote";
import { CriticalAttachedSlideTickNote } from "./slideTickNotes/visibleSlideTickNotes/attachedSlideTickNotes/CriticalAttachedSlideTickNote";

// TODO: figure out hitbox top and bottom
export const hitboxTop = 10;
export const hitboxBottom = -10;

// TODO: fill
export const noteTypes : { [index : string] : typeof Note } = {
    NormalTraceNote,
    CriticalTraceNote,
    NormalFlickTraceNote,
    CriticalFlickTraceNote,

    NormalTapNote,
    CriticalTapNote,
    NormalFlickNote,
    CriticalFlickNote,

    NormalSlideStartNote,
    CriticalSlideStartNote,

    NormalSlideEndNote,
    CriticalSlideEndNote,
    NormalSlideEndFlickNote,
    CriticalSlideEndFlickNote,

    // HiddenSlideTickNote,
    NormalSlideTickNote,
    CriticalSlideTickNote,
    NormalAttachedSlideTickNote,
    CriticalAttachedSlideTickNote
};