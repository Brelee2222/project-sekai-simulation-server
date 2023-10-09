import { LevelDataEntity } from "sonolus-core";
import { Touch } from "./geometry/Touch";

export enum Judgment {
    Perfect,
    Great,
    Good,
    Bad,
    Miss
}

export type JudgmentFrames = {
    before : [
        perfect : number,
        great : number,
        good : number,
        bad : number
    ],
    after : [
        perfect : number,
        great : number,
        good : number,
        bad : number
    ]
}

export function judgeFrame(noteTime : number, touch : Touch, judgmentFrames : JudgmentFrames) : Judgment {
    const difference = Math.abs(noteTime - touch.touchTime);
    const judgments = noteTime > touch.touchTime ? judgmentFrames.before : judgmentFrames.after;

    if(judgments[0] <= difference) return Judgment.Perfect;
    if(judgments[1] <= difference) return Judgment.Great;
    if(judgments[2] <= difference) return Judgment.Good;

    return Judgment.Bad;
}

export function getEntityDataName(entity : LevelDataEntity, name : string) {
    return entity.data.find(data => data.name == name);
}

export const noteJudgments = {
    NormalTraceNote : {
        before : [ 3.5, 3.5, 3.5, 3.5 ],
        after : [ 3.5, 3.5, 3.5, 3.5 ]
    },
    CriticalTraceNote : {
        before : [ 3.5, 3.5, 3.5, 3.5 ],
        after : [ 3.5, 3.5, 3.5, 3.5 ]
    },
    NormalFlickTraceNote : {
        before : [ 6.5, 6.5, 6.5, 5.5 ],
        after : [ 7.5, 7.5, 7.5, 7.5 ]
    },
    CriticalFlickTraceNote : {
        before : [ 6.5, 6.5, 6.5, 5.5 ],
        after : [ 7.5, 7.5, 7.5, 7.5 ]
    },
    NormalTapNote : {
        before : [ 2.5, 5.0, 6.5, 7.5 ],
        after : [ 2.5, 5.0, 6.5, 7.5 ]
    },
    CriticalTapNote : {
        before : [ 3.299999952316284, 4.5, 6.5, 7.5 ],
        after : [ 3.299999952316284, 4.5, 6.5, 7.5 ]
    },
    NormalFlickNote : {
        before : [ 2.5, 6.5, 7.0, 7.5 ],
        after : [ 2.5, 7.5, 8.0, 8.5 ]
    },
    CriticalFlickNote : {
        before : [ 3.5, 6.5, 7.0, 7.5 ],
        after : [ 3.5, 7.5, 8.0, 8.5 ]
    },
    NormalSlideStartNote : {
        before : [ 2.5, 5.0, 6.5, 7.5 ],
        after : [ 2.5, 5.0, 6.5, 7.5 ]
    },
    CriticalSlideStartNote : {
        before : [ 3.299999952316284, 4.5, 6.5, 7.5 ],
        after : [ 3.299999952316284, 4.5, 6.5, 7.5 ]
    },
    NormalSlideEndNote : {
        before : [ 3.5, 6.5, 7.5, 7.5 ],
        after : [ 4.0, 8.0, 8.5, 8.5 ]
    },
    CriticalSlideEndNote : {
        before : [ 3.5, 6.5, 7.5, 7.5 ],
        after : [ 4.0, 8.0, 8.5, 8.5 ]
    }
} satisfies { [index : string] : JudgmentFrames };