class Circle {
    color : string = 'green';
    radius : number = 20;
    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
}

let circlelist:Circle[] =[];
circlelist.push(new Circle('red',29));
circlelist.push(new Circle('yellow',50));
circlelist.push(new Circle('orange',57));

function showCircle(circle : Circle) {
    console.log(`hinh tron nay co mau ${circle.color} va ban kinh ${circle.radius}`)
}
circlelist.forEach(showCircle);