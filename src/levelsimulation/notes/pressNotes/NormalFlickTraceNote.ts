import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { FlickTraceNote } from "./FlickTraceNote";

export class NormalFlickTraceNote extends FlickTraceNote {
    judgmentFrames = noteJudgments.NormalFlickTraceNote;
    meta = noteMeta.NormalFlickTraceNote;
}