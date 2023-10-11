import { Touch } from "../../utils/geometry/Touch";
import { TraceNote } from "../traceNotes/TraceNote";

export abstract class SlideEndNote extends TraceNote {
    shouldJudge(touch: Touch): boolean {
        return super.shouldJudge(touch) && !touch.pressing;
    }
}