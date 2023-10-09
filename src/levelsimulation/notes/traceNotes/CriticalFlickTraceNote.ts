import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { FlickTraceNote } from "./FlickTraceNote";

export class CriticalFlickTraceNote extends FlickTraceNote {
    judgmentFrames = noteJudgments.CriticalFlickTraceNote;
    meta = noteMeta.CriticalFlickTraceNote;
}