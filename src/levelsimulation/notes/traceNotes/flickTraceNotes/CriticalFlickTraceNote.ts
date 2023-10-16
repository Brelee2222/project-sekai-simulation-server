import { noteJudgments } from "../../../judgment";
import { noteTypeMeta } from "../../../noteMeta";
import { FlickTraceNote } from "./FlickTraceNote";

export class CriticalFlickTraceNote extends FlickTraceNote {
    judgmentTimes = noteJudgments.CriticalFlickTraceNote
    noteTypeMeta = noteTypeMeta.CriticalFlickTraceNote;
}