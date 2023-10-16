import { noteTypeMeta } from "../../noteMeta";
import { noteJudgments } from "../../judgment";
import { SlideStartNote } from "./SlideStartNote";

export class NormalSlideStartNote extends SlideStartNote {
    judgmentTimes = noteJudgments.NormalSlideStartNote;
    noteTypeMeta = noteTypeMeta.NormalSlideStartNote;
}