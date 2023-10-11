import { noteTypeMeta } from "../..";
import { noteJudgments } from "../../judgment";
import { TapNote } from "./TapNote";

export class NormalTapNote extends TapNote {
    judgmentTimes = noteJudgments.NormalTapNote;
    noteTypeMeta = noteTypeMeta.NormalTapNote;
}