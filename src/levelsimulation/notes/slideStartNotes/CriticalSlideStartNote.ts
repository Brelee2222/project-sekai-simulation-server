import { noteTypeMeta } from "../..";
import { noteJudgments } from "../../judgment";
import { SlideStartNote } from "./SlideStartNote";

export class CriticalSlideStartNote extends SlideStartNote {
    judgmentTimes = noteJudgments.CriticalSlideStartNote;
    noteTypeMeta = noteTypeMeta.CriticalSlideStartNote;
}