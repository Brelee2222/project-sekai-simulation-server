import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { SlideEndNote } from "./SlideEndNote";

export class CriticalSlideEndNote extends SlideEndNote {
    judgmentFrames = noteJudgments.CriticalSlideEndNote;
    meta = noteMeta.CriticalSlideEndNote;
}