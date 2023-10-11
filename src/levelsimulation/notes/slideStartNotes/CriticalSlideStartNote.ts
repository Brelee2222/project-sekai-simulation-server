import { noteTypeMeta } from "../..";
import { noteJudgments } from "../../judgment";
import { TapNote } from "../tapNotes/TapNote";

export class CriticalSlideStartNote extends TapNote {
    judgmentTimes = noteJudgments.CriticalSlideStartNote;
    noteTypeMeta = noteTypeMeta.CriticalSlideStartNote;
}