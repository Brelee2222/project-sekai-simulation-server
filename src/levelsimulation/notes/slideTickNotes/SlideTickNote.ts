import { time } from "../..";
import { Judgment } from "../../judgment";
import { NoteState } from "../../noteMeta";
import { Touch } from "../../utils/geometry/Touch";
import { Note } from "../Note";

export abstract class SlideTickNote extends Note {
    touch() {
        if(time < this.noteTime) return;

        super.touch();
    }

    judge(touch : Touch) : void {
        this.tap = touch.touchTime;
        this.state = NoteState.Inactive;
        this.judgment = Judgment.Perfect;
    }
}