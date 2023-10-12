import { Judgment } from "../../../judgment";
import { Touch } from "../../../utils/geometry/Touch";
import { flicking, flickingCorrectDirection, getFlickDirection } from "../../flick";
import { TraceNote } from "../TraceNote";

export abstract class FlickTraceNote extends TraceNote {
    flickDirection! : number;

    init() {
        super.init();

        this.flickDirection = getFlickDirection(this.entityData);
    }
    
    judge(touch : Touch) {
        super.touch();

        if(this.judgment == Judgment.Perfect && !flickingCorrectDirection(touch, this.flickDirection)) this.judgment = Judgment.Great;
    }

    shouldJudge(touch: Touch) : boolean {
        return super.shouldJudge(touch) && flicking(touch);
    }
}