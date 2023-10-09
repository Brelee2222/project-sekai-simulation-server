import { flicking } from "../..";
import { Touch } from "../../../geometry/Touch";
import { TapNote } from "./TapNote";

export abstract class FlickNote extends TapNote {
    tapping = false;

    shouldJudge(touch: Touch): boolean {
        if(super.shouldJudge(touch)) this.tapping = true;

        return this.tapping && flicking(touch);
    }
}