import { Vector2 } from "./Vector2";

export class Hitbox {
    startPos : Vector2;
    endPos : Vector2;

    constructor(startPos : Vector2, endPos : Vector2) {
        this.startPos = startPos;
        this.endPos = endPos;
    }

    touching(point : Vector2, radius : number) : boolean {
        return (this.startPos.x <= point.x + radius || this.endPos.x >= point.x + radius) && (this.startPos.y <= point.y + radius || this.endPos.y >= point.y + radius);
    } 
}