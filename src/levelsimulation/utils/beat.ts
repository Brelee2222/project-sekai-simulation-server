import { EngineArchetypeDataName, EngineArchetypeName, LevelDataEntity } from "sonolus-core";
import { getEntityDataName } from "../noteMeta";

export type TimeStamp = {
    beat: number;
    bpm: number;
    time: number;
}

let bpmChanges : TimeStamp[];

export function beatAt(beat : number) : TimeStamp {
    for(let index = bpmChanges.length-1; index > 0; index--) {
        const bpmChange = bpmChanges[index];

        if(bpmChange.beat <= beat) return {
            beat,
            bpm : bpmChange.bpm,
            time : bpmChange.time + (beat - bpmChange.beat) / bpmChange.bpm
        };
    }

    return {
        beat : 0,
        bpm : NaN,
        time : 0
    }
}

export function beatAtTime(time : number) : TimeStamp {
    for(let index = bpmChanges.length-1; index > 0; index--) {
        const bpmChange = bpmChanges[index];

        if(bpmChange.time <= time) return {
            beat : bpmChange.beat + (time - bpmChange.time) * bpmChange.bpm,
            bpm : bpmChange.bpm,
            time
        };
    }

    return {
        beat : 0,
        bpm : NaN,
        time : 0
    }
}

export function loadBeats(levelEntities : LevelDataEntity[]) {
    bpmChanges = levelEntities
    .filter(entity => entity.archetype == EngineArchetypeName.BpmChange)
    .map(bpmChange => ({
        beat : (getEntityDataName(bpmChange, EngineArchetypeDataName.Beat) as { value : number }).value,
        bpm : (getEntityDataName(bpmChange, EngineArchetypeDataName.Bpm) as { value : number }).value,
        time : 0
    }))
    .sort((a, b) => a.beat - b.beat);

    bpmChanges.reduce((prevBeat, currentBeat, index, array) => {
        currentBeat.time = prevBeat.time + (currentBeat.beat - prevBeat.beat) / prevBeat.bpm

        return array[index+1] = currentBeat;
    }, { beat : 0, bpm : 1, time : 0});
}