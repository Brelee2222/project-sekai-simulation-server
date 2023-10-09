import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { SlideEndNote } from "./SlideEndNote";

export class NormalSlideEndNote extends SlideEndNote {
    judgmentFrames = noteJudgments.NormalSlideEndNote;
    meta = noteMeta.NormalSlideEndNote;
}