import { Judgment } from "../../../judgment";
import { Touch } from "../../../utils/geometry/Touch";
import { flicking, flickingCorrectDirection, getFlickDirection } from "../../flick";
import { TapNote } from "../TapNote";

export abstract class SingleFlickNote extends TapNote {
    active : boolean = false;

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
        if(super.shouldJudge(touch)) this.active = true;

        if(!this.active) return false;;

        return flicking(touch);
    }
}