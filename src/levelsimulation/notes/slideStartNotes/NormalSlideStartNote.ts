import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { TapNote } from "../tapNotes/TapNote";

export class NormalSlideStartNote extends TapNote {
    judgmentFrames = noteJudgments.NormalSlideStartNote;
    meta = noteMeta.NormalSlideStartNote;
}