import { Touch } from "./utils/geometry/Touch";

export enum Judgment {
    Perfect,
    Great,
    Good,
    Bad,
    Miss
}

export type JudgmentTimes = {
    before: [
        perfect: number,
        great: number,
        good: number,
        bad: number
    ];
    after: [
        perfect: number,
        great: number,
        good: number,
        bad: number
    ];
};

export function judgeTime(noteTime: number, touch: Touch, judgmentFrames: JudgmentTimes): Judgment {
    const difference = Math.abs(noteTime - touch.touchTime);
    const judgments = noteTime > touch.touchTime ? judgmentFrames.before : judgmentFrames.after;

    if (judgments[0] <= difference) return Judgment.Perfect;
    if (judgments[1] <= difference) return Judgment.Great;
    if (judgments[2] <= difference) return Judgment.Good;

    return Judgment.Bad;
}

function frameToTime(...frames: [perfect: number, great: number, good: number, bad: number]) {
    return frames.map(frame => frame / 60) as [perfect: number, great: number, good: number, bad: number];
}

export const noteJudgments = {
    NormalTraceNote: {
        before: frameToTime(3.5, 3.5, 3.5, 3.5),
        after: frameToTime(3.5, 3.5, 3.5, 3.5)
    },
    CriticalTraceNote: {
        before: frameToTime(3.5, 3.5, 3.5, 3.5),
        after: frameToTime(3.5, 3.5, 3.5, 3.5)
    },
    NormalFlickTraceNote: {
        before: frameToTime(6.5, 6.5, 6.5, 5.5),
        after: frameToTime(7.5, 7.5, 7.5, 7.5)
    },
    CriticalFlickTraceNote: {
        before: frameToTime(6.5, 6.5, 6.5, 5.5),
        after: frameToTime(7.5, 7.5, 7.5, 7.5)
    },
    NormalTapNote: {
        before: frameToTime(2.5, 5, 6.5, 7.5),
        after: frameToTime(2.5, 5, 6.5, 7.5)
    },
    CriticalTapNote: {
        before: frameToTime(3.299999952316284, 4.5, 6.5, 7.5),
        after: frameToTime(3.299999952316284, 4.5, 6.5, 7.5)
    },
    NormalFlickNote: {
        before: frameToTime(2.5, 6.5, 7, 7.5),
        after: frameToTime(2.5, 7.5, 8, 8.5)
    },
    CriticalFlickNote: {
        before: frameToTime(3.5, 6.5, 7, 7.5),
        after: frameToTime(3.5, 7.5, 8, 8.5)
    },
    NormalSlideStartNote: {
        before: frameToTime(2.5, 5, 6.5, 7.5),
        after: frameToTime(2.5, 5, 6.5, 7.5)
    },
    CriticalSlideStartNote: {
        before: frameToTime(3.299999952316284, 4.5, 6.5, 7.5),
        after: frameToTime(3.299999952316284, 4.5, 6.5, 7.5)
    },
    NormalSlideEndNote: {
        before: frameToTime(3.5, 6.5, 7.5, 7.5),
        after: frameToTime(4, 8, 8.5, 8.5)
    },
    CriticalSlideEndNote: {
        before: frameToTime(3.5, 6.5, 7.5, 7.5),
        after: frameToTime(4, 8, 8.5, 8.5)
    },
    NormalSlideEndFlickNote: {
        before: frameToTime(3.5, 6.5, 7.5, 7.5),
        after: frameToTime(4, 8, 8.5, 8.5)
    },
    CriticalSlideEndFlickNote: {
        before: frameToTime(3.5, 6.5, 7.5, 7.5),
        after: frameToTime(4, 8, 8.5, 8.5)
    }
} satisfies { [index: string]: JudgmentTimes; };
