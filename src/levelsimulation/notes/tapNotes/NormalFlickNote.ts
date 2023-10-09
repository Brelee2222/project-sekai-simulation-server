import { noteMeta } from "..";
import { JudgmentFrames, noteJudgments } from "../..";
import { FlickNote } from "./FlickNote";

export class NormalFlickNote extends FlickNote {
    judgmentFrames = noteJudgments.NormalFlickNote;
    meta = noteMeta.NormalFlickNote;
}