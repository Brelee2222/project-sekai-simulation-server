import { LevelDataEntity } from "sonolus-core";
import { getEntityDataName } from "..";
import { Touch } from "../utils/geometry/Touch";

export const minFlickVelocity = 0.5;

export function getFlickDirection(entityData: LevelDataEntity) {
    return (getEntityDataName(entityData, "direction") as { value: number; }).value;
}
// TODO: finish
// Math.tan(touch.vpos.x/touch.vpos.y)

export function flickingCorrectDirection(touch: Touch, direction: number): boolean {
    return true;
}

export function flicking(touch: Touch): boolean {
    return touch.vpos.distance() > minFlickVelocity;
}
