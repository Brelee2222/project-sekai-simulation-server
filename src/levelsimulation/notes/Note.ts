import { EngineArchetypeDataName, LevelDataEntity } from "sonolus-core";
import { NoteState, beatAt } from "../levelSimulation";
import { Judgment, getEntityDataName } from "..";
import { Hitbox } from "../geometry/Hitbox";
import { Touch } from "../geometry/Touch";
import { NoteMeta } from ".";

export abstract class Note {
    entityData! : LevelDataEntity;

    noteTime! : number;

    hitbox! : Hitbox;

    tap? : number;

    judgment : Judgment = Judgment.Miss;

    state : NoteState = NoteState.Idle;

    readonly abstract meta : NoteMeta;

    init() : void {
        this.noteTime = beatAt((getEntityDataName(this.entityData, EngineArchetypeDataName.Beat) as { value : number }).value).time;
    }

    touch(touch : Touch) : boolean {    
        const shouldJudge = this.shouldJudge(touch);
        
        if(shouldJudge) this.judge(touch);

        return shouldJudge;
    }

    shouldJudge(touch : Touch) : boolean {
        return this.hitbox.touching(touch.pos, touch.radius);
    }

    abstract update(time : number) : void;
    abstract judge(touch : Touch) : void;
}