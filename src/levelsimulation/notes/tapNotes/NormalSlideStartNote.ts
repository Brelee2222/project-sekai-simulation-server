import { JudgmentFrames } from "../..";
import { TapNote } from "./TapNote";

export class NormalSlideStartNote extends TapNote {
    judgmentFrames: JudgmentFrames;
    meta: readonly number[];

}