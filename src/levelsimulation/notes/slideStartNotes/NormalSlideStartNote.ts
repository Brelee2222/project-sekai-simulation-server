import { noteTypeMeta } from "../..";
import { noteJudgments } from "../../judgment";
import { TapNote } from "../tapNotes/TapNote";

export class NormalSlideStartNote extends TapNote {
    judgmentTimes = noteJudgments.NormalSlideStartNote;
    noteTypeMeta = noteTypeMeta.NormalSlideStartNote;
}