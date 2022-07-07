class Fan {
    // slow : number =1;
    // medium : number =2;
    // fast : number =3;
    private speed : number;
    private on : boolean;
    private radius : number;
    private color : string;

    constructor(speed: number = 1, on: boolean = false, radius: number = 5, color: string = 'blue') {
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    setOn(on) {
        this.on = on;
    }
    setColor(color) {
        this.color = color;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getSpeed() {
        return this.speed;
    }
    getColor() {
        return this.color;
    }
    getRadius() {
        return this.radius;
    }
    getOn() {
        return this.on;
    }
    toString=()=>{
        if(this.getOn()){
            return `Fan is on, tốc độ quạt là ${this.getSpeed()}, màu quạt là ${this.getRadius()}, bán kính quạt là ${this.getRadius()}`;
        }else {
            return `Fan is off, tốc độ quạt là ${this.getSpeed()}, màu quạt là ${this.getColor()}, bán kính quạt là ${this.getRadius()}`
        }
    }
}
let fan = new Fan(3,true,10,'red');
fan.toString()
console.log(fan.toString());