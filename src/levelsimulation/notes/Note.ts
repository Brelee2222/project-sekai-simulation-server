import { EngineArchetypeDataName } from "sonolus-core";
import { NoteDataMeta, NoteState } from "../noteMeta";
import { Judgment } from "../judgment";
import { Hitbox } from "../utils/geometry/Hitbox";
import { NoteTypeMeta } from "../noteMeta";
import { beatAt, beatAtTime } from "../utils/beat";
import { touches } from "../utils/touches";
import { Touch } from "../utils/geometry/Touch";
import { Vector2 } from "../utils/geometry/Vector2";
import { hitboxBottom, hitboxTop } from ".";
import { LevelArchetype } from "../utils/LevelArchetype";

export abstract class Note extends LevelArchetype {
    data = this.defineData({
        beat : { name : EngineArchetypeDataName.Beat, type : "value" },
        lane : { name : "lane", type : "value" },
        size : { name : "size", type : "value" }
    });
    
    noteTime! : number;

    hitbox! : Hitbox;

    tap : number = -1;

    judgment : Judgment = Judgment.Miss;

    state : NoteState = NoteState.Idle;

    abstract noteTypeMeta : NoteTypeMeta;

    init() : void {
        this.noteTime = beatAt(this.data.beat).time;

        this.hitbox = new Hitbox(new Vector2(this.data.lane, hitboxTop), new Vector2(this.data.lane + this.data.size, hitboxBottom)); 
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

    replay() {
        this.entityData.data.push({ name : "tap", value : beatAtTime(this.tap).beat });
    }

    abstract judge(touch : Touch) : void;
}