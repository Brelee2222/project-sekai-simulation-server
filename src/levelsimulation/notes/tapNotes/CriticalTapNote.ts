import { noteTypeMeta } from "../../noteMeta";
import { noteJudgments } from "../../judgment";
import { TapNote } from "./TapNote";

export class CriticalTapNote extends TapNote {
    judgmentTimes = noteJudgments.CriticalTapNote;
    noteTypeMeta = noteTypeMeta.CriticalTapNote;
}