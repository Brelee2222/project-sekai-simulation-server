import { Touch } from "../../geometry/Touch";
import { TraceNote } from "../traceNotes/TraceNote";

export abstract class TapNote extends TraceNote {
    shouldJudge(touch: Touch): boolean {
        return super.shouldJudge(touch) && !touch.pressed;
    }
}