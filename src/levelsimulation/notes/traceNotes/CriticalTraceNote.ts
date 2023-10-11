import { noteTypeMeta } from "../..";
import { noteJudgments } from "../../judgment";
import { TraceNote } from "./TraceNote";

export class CriticalTraceNote extends TraceNote {
    judgmentTimes = noteJudgments.CriticalTraceNote;
    noteTypeMeta = noteTypeMeta.CriticalTraceNote;
}