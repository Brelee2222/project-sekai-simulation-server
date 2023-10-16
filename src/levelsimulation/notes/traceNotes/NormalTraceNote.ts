import { noteTypeMeta } from "../../noteMeta";
import { noteJudgments } from "../../judgment";
import { TraceNote } from "./TraceNote";

export class NormalTraceNote extends TraceNote {
    judgmentTimes = noteJudgments.NormalTraceNote;
    noteTypeMeta = noteTypeMeta.NormalTraceNote;
}