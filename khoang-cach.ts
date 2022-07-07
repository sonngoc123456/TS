class Circle {
    radius : number;
    constructor(radius: number) {
        this.radius = radius;
    }
}
function distance(circleOne :Circle,circleTwo:Circle,d : number) : number {
    let distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}

let cir1 = new Circle(9);
let cir2 = new Circle(5);
console.log(distance(cir1,cir2,24));