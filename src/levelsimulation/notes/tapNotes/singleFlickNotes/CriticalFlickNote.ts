import { noteJudgments } from "../../../judgment";
import { noteTypeMeta } from "../../../noteMeta";
import { SingleFlickNote } from "./SingleFlickNote";

export class CriticalFlickNote extends SingleFlickNote {
    judgmentTimes = noteJudgments.CriticalFlickNote;
    noteTypeMeta = noteTypeMeta.CriticalFlickNote;
}