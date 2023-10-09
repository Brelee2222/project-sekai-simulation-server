import { JudgmentFrames, judgeFrame } from "../..";
import { Touch } from "../../geometry/Touch";
import { NoteState } from "../../levelSimulation";
import { Note } from "../Note";

export abstract class TraceNote extends Note {
    readonly abstract judgmentFrames : JudgmentFrames;

    touch(touch : Touch) {
        const touching = super.touch(touch);

        if(touching) this.judge(touch);

        return touching;
    }

    judge(touch : Touch) : void {
        this.state = NoteState.Inactive;
        this.judgment = judgeFrame(this.noteTime, touch, this.judgmentFrames);
    }

    update(time : number) {
        switch(this.state) {
            case NoteState.Idle:
                if(this.judgmentFrames.before[3] > time) this.state = NoteState.Active;
                break;

            case NoteState.Active:
                if(this.judgmentFrames.after[3] < time) this.state = NoteState.Inactive;
                break;
        }
    }
}