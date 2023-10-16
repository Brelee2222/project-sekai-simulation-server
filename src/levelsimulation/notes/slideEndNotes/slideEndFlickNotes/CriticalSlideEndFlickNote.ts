import { noteJudgments } from "../../../judgment";
import { noteTypeMeta } from "../../../noteMeta";
import { SlideEndFlickNote } from "./SlideEndFlickNote";

export class CriticalSlideEndFlickNote extends SlideEndFlickNote {
    judgmentTimes = noteJudgments.CriticalSlideEndFlickNote;
    noteTypeMeta = noteTypeMeta.CriticalSlideEndFlickNote;
}