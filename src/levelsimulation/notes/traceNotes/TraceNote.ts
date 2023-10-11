import { NoteState } from "../..";
import { JudgmentTimes, judgeTime } from "../../judgment";
import { time } from "../../levelSimulation";
import { Touch } from "../../utils/geometry/Touch";
import { Note } from "../Note";

export abstract class TraceNote extends Note {
    readonly abstract judgmentTimes : JudgmentTimes;

    inputTime! : { min : number, max : number };

    touch() {
        if(time < this.inputTime.min) return;

        super.touch();
    }

    init() {
        super.init();

        this.inputTime = {
            min : this.noteTime - this.judgmentTimes.before[3],
            max : this.noteTime + this.judgmentTimes.after[3]
        }
    }

    judge(touch : Touch) : void {
        this.tap = touch.touchTime;
        this.state = NoteState.Inactive;
        this.judgment = judgeTime(this.noteTime, touch, this.judgmentTimes);
    }
}