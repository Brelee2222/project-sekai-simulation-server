import { Touch } from "../../../geometry/Touch";
import { TraceNote } from "../TraceNote";

export abstract class TapNote extends TraceNote {
    shouldJudge(touch: Touch): boolean {
        return super.shouldJudge(touch) && !touch.pressed;
    }
}