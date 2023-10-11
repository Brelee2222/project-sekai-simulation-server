import { Touch } from "../../utils/geometry/Touch";
import { TraceNote } from "../traceNotes/TraceNote";

export abstract class TapNote extends TraceNote {
    shouldJudge(touch: Touch) : boolean {
        if(touch.touchStartTime < this.inputTime.min) return false;

        if(touch.occupied) return false;

        if(!super.shouldJudge(touch)) return false;

        return touch.occupied = true;
    }
}