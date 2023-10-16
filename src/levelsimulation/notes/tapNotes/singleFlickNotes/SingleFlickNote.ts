import { Judgment } from "../../../judgment";
import { Touch } from "../../../utils/geometry/Touch";
import { flicking, flickingCorrectDirection } from "../../flick";
import { TapNote } from "../TapNote";

export abstract class SingleFlickNote extends TapNote {
    active : boolean = false;

    flickDirection = this.defineData({
        flickDirection : { name : "direction", type : "value" }
    }).flickDirection;
    
    correctDirection : number = 1;

    replay() {
        super.replay();
        this.entityData.data.push({ name : "correctdirection", value : this.correctDirection });
    }

    judge(touch : Touch) {
        super.touch();

        if(this.judgment == Judgment.Perfect && !flickingCorrectDirection(touch, this.flickDirection)) {
            this.judgment = Judgment.Great;
            this.correctDirection = 0;
        }
    }

    shouldJudge(touch: Touch) : boolean {
        if(super.shouldJudge(touch)) this.active = true;

        if(!this.active) return false;;

        return flicking(touch);
    }
}