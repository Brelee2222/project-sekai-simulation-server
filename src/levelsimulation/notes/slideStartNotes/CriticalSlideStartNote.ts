import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { TapNote } from "../tapNotes/TapNote";

export class CriticalSlideStartNote extends TapNote {
    judgmentFrames = noteJudgments.CriticalSlideStartNote;
    meta = noteMeta.CriticalSlideStartNote;
}