import { noteTypeMeta } from "../..";
import { noteJudgments } from "../../judgment";
import { SlideEndNote } from "./SlideEndNote";

export class NormalSlideEndNote extends SlideEndNote {
    judgmentTimes = noteJudgments.NormalSlideEndNote;
    noteTypeMeta = noteTypeMeta.NormalSlideEndNote;
}