import { flicking, flickingCorrectDirection, getFlickDirection } from "..";
import { Judgment } from "../..";
import { Touch } from "../../geometry/Touch";
import { TapNote } from "./TapNote";

export abstract class FlickNote extends TapNote {
    tapping = false;

    flickDirection! : number;

    init() {
        super.init()

        this.flickDirection = getFlickDirection(this.entityData);
    }

    judge(touch : Touch) : void {
        super.judge(touch);

        if(this.judgment === Judgment.Perfect && !flickingCorrectDirection(touch, this.flickDirection)) this.judgment = Judgment.Great;
    }

    shouldJudge(touch: Touch): boolean {
        if(super.shouldJudge(touch)) this.tapping = true;

        return this.tapping && flicking(touch);
    }
}