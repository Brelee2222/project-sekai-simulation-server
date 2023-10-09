import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { FlickTraceNote } from "./FlickTraceNote";

export class NormalTraceNote extends FlickTraceNote {
    judgmentFrames = noteJudgments.NormalFlickTraceNote;
    meta = noteMeta.NormalFlickTraceNote;
}