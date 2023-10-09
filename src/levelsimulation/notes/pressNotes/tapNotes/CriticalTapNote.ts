import { noteMeta } from "../..";
import { noteJudgments } from "../../..";
import { TapNote } from "./TapNote";

export class CriticalTapNote extends TapNote {
    judgmentFrames = noteJudgments.CriticalTapNote;
    meta = noteMeta.CriticalTapNote;
}