export class Vector2 {
    readonly x : number;
    readonly y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    add(vector : Vector2) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector : Vector2) {
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }

    multiply(vector : Vector2) {
        return new Vector2(this.x * vector.x, this.y * vector.y);
    }

    divide(vector : Vector2) {
        return new Vector2(this.x / vector.x, this.y / vector.y);
    }

    scale(scaleFactor : number) {
        return new Vector2(this.x * scaleFactor, this.y * scaleFactor);
    }

    normalize() {
        return this.scale(1/this.distance());
    }

    distance() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    sum() {
        return this.x + this.y;
    }
}