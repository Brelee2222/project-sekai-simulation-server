import { noteJudgments } from "../../../judgment";
import { noteTypeMeta } from "../../../noteMeta";
import { FlickTraceNote } from "./FlickTraceNote";

export class NormalFlickTraceNote extends FlickTraceNote {
    judgmentTimes = noteJudgments.NormalFlickTraceNote
    noteTypeMeta = noteTypeMeta.NormalFlickTraceNote;
}