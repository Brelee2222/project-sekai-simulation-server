import { noteMeta } from "..";
import { noteJudgments } from "../..";
import { FlickNote } from "./FlickNote";

export class CriticalFlickNote extends FlickNote {
    judgmentFrames = noteJudgments.CriticalFlickNote;
    meta = noteMeta.CriticalFlickNote;
}