import { noteJudgments } from "../../../judgment";
import { noteTypeMeta } from "../../../noteMeta";
import { SlideEndFlickNote } from "./SlideEndFlickNote";

export class NormalSlideEndFlickNote extends SlideEndFlickNote {
    judgmentTimes = noteJudgments.NormalSlideEndFlickNote;
    noteTypeMeta = noteTypeMeta.NormalSlideEndFlickNote;
}