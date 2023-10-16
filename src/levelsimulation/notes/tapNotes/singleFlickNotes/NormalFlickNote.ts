import { noteJudgments } from "../../../judgment";
import { noteTypeMeta } from "../../../noteMeta";
import { SingleFlickNote } from "./SingleFlickNote";

export class NormalFlickNote extends SingleFlickNote {
    judgmentTimes = noteJudgments.NormalFlickNote;
    noteTypeMeta = noteTypeMeta.NormalFlickNote;
}