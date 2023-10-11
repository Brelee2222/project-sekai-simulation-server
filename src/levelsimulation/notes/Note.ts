import { EngineArchetypeDataName, LevelDataEntity } from "sonolus-core";
import { NoteDataMeta, NoteState } from "..";
import { Judgment } from "../judgment";
import { getEntityDataName } from "..";
import { Hitbox } from "../utils/geometry/Hitbox";
import { NoteTypeMeta } from "..";
import { beatAt } from "../utils/beat";
import { touches } from "../utils/touches";
import { Touch } from "../utils/geometry/Touch";
import { Vector2 } from "../utils/geometry/Vector2";
import { hitboxBottom, hitboxTop } from ".";

export abstract class Note {
    entityData! : LevelDataEntity;

    noteTime! : number;

    index! : number;

    hitbox! : Hitbox;

    tap : number = NaN;

    judgment : Judgment = Judgment.Miss;

    state : NoteState = NoteState.Idle;

    readonly abstract noteTypeMeta : NoteTypeMeta;

    init() : void {
        this.noteTime = beatAt((getEntityDataName(this.entityData, EngineArchetypeDataName.Beat) as { value : number }).value).time;

        const lEdge = (getEntityDataName(this.entityData, "lane") as { value : number }).value;
        const rEdge = lEdge + (getEntityDataName(this.entityData, "size") as { value : number }).value;

        this.hitbox = new Hitbox(new Vector2(rEdge, hitboxTop), new Vector2(lEdge, hitboxBottom)); 
    }

    update() : void {
        // TODO: add
    }

    touch() : void {
        if(this.state == NoteState.Inactive) return;

        for(const touch of touches) {
            if(this.shouldJudge(touch)) {
                this.judge(touch);
                return;
            }
        }
    }

    shouldJudge(touch : Touch) : boolean {
        return this.hitbox.touching(touch.pos, touch.radius);
    }

    get noteDataMeta() : NoteDataMeta {
        return [ 0, 0 ];
    }

    abstract judge(touch : Touch) : void;
}