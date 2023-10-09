import { EngineArchetypeDataName, EngineArchetypeName, LevelData, LevelDataEntity } from "sonolus-core";
import { getEntityDataName } from ".";
import { Note } from "./notes/Note";
import { Touch } from "./geometry/Touch";

export enum NoteState {
    Active,
    Inactive,
    Idle
}

export type BeatStamp = {
    beat : number,
    bpm : number,
    time : number
}

let bpmChanges : BeatStamp[];

let notes : Note[];

let time = 0;

export function loadLevel(levelData : LevelData) {
    const levelEntities : LevelDataEntity[] = levelData.entities;
    time = 0;

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

    notes = levelEntities
    // .filter(entity => noteTypes[entity.archetype] !== undefined)
    .filter(entity => entity.archetype.endsWith("Note"))
    .map(note => 
        // Object.assign(Object.create(noteTypes[note.archetype].prototype) as Note, { entityData : note })
        Object.assign(Object.create(Note.prototype), { entityData : note })
    );

    notes.forEach(note => note.init());
}

export function beatAt(beat : number) : BeatStamp {
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

export function timeAt(time : number) : BeatStamp {
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

export function touch(touch : Touch) {
    for(const note of notes) if(note.touch(touch)) return;
}

export function replayLevel() : void {
    notes.forEach(note => {
        note.entityData.data.push({ name : "tap", value : timeAt(note.tap ?? NaN).beat});
    });
}

export function auto() : void {
    notes.forEach(note => {
        note.tap = note.noteTime;
    });
}