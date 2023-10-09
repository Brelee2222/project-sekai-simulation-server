import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { TapNote } from "./TapNote";

export class NormalTapNote extends TapNote {
    judgmentFrames = noteJudgments.NormalTapNote;
    meta = noteMeta.NormalTapNote;
}