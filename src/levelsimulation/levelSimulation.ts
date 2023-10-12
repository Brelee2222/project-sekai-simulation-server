import { LevelData, LevelDataEntity } from "sonolus-core";
import { Note } from "./notes/Note";
import { beatAtTime, loadBeats } from "./utils/beat";
import { updateTouches } from "./utils/touches";
import { noteTypes } from "./notes";

let notes : Note[];

export let time: number;

export function loadLevel(levelData : LevelData) {
    const levelEntities : LevelDataEntity[] = levelData.entities;

    time = 0;

    loadBeats(levelEntities);

    notes = levelEntities
    .filter(entity => noteTypes[entity.archetype] !== undefined)
    // .filter(entity => entity.archetype.endsWith("Note"))
    .map(note => 
        Object.assign(new noteTypes[note.archetype](), { entityData : note, index : levelEntities.indexOf(note) })
        // Object.assign(Object.create(Note.prototype), { entityData : note, index : levelEntities.indexOf(note) })
    );

    notes.forEach(note => note.init());
}

export function replayLevel() : void {
    notes.forEach(note => {
        note.entityData.data.push({ name : "tap", value : beatAtTime(note.tap).beat});
    });
}

export function step(seconds : number) {
    time += seconds;

    notes.forEach(note => note.touch());

    updateTouches();

    notes.forEach(note => note.update());
}

export function auto() : void {
    notes.forEach(note => {
        note.tap = note.noteTime;
    });
}