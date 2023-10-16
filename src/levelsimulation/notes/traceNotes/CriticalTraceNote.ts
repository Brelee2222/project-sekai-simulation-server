import { NoteTypeMeta, noteTypeMeta } from "../../noteMeta";
import { JudgmentTimes, noteJudgments } from "../../judgment";
import { TraceNote } from "./TraceNote";

export class CriticalTraceNote extends TraceNote {
    judgmentTimes : JudgmentTimes = noteJudgments.CriticalTraceNote;
    noteTypeMeta : NoteTypeMeta = noteTypeMeta.CriticalTraceNote;
}