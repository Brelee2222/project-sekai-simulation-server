import { flicking, flickingCorrectDirection, getFlickDirection } from "..";
import { Judgment } from "../..";
import { Touch } from "../../geometry/Touch";
import { TraceNote } from "./TraceNote";

export abstract class FlickTraceNote extends TraceNote {
    flickDirection! : number;

    init() {
        super.init()

        this.flickDirection = getFlickDirection(this.entityData);
    }

    judge(touch : Touch) : void {
        super.judge(touch);

        if(this.judgment === Judgment.Perfect && !flickingCorrectDirection(touch, this.flickDirection)) this.judgment = Judgment.Great;
    }

    shouldJudge(touch : Touch) : boolean {
        return super.shouldJudge(touch) && flicking(touch);
    }
}