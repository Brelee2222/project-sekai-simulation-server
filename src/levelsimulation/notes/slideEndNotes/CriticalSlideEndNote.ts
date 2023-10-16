import { noteTypeMeta } from "../../noteMeta";
import { noteJudgments } from "../../judgment";
import { SlideEndNote } from "./SlideEndNote";

export class CriticalSlideEndNote extends SlideEndNote {
    judgmentTimes = noteJudgments.CriticalSlideEndNote;
    noteTypeMeta = noteTypeMeta.CriticalSlideEndNote;
}