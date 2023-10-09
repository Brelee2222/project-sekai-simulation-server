import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { TraceNote } from "./TraceNote";

export class CriticalTraceNote extends TraceNote {
    judgmentFrames = noteJudgments.CriticalTraceNote;
    meta = noteMeta.CriticalTraceNote;
}