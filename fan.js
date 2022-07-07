var Fan = /** @class */ (function () {
    function Fan() {
    }
    // constructor(speed: number = 1, on: boolean = false, radius: number = 5, color: string = 'blue') {
    //     this.speed = speed;
    //     this.on = on;
    //     this.radius = radius;
    //     this.color = color;
    // }
    Fan.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.setOn = function (on) {
        this.on = on;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.getOn = function () {
        return this.on;
    };
    // slow : number =1;
    // medium : number =2;
    // fast : number =3;
    Fan.speed = 1;
    return Fan;
}());
// let fan = new Fan(3,true,10,'red');
// fan.toString()
// console.log(fan.toString());
console.log(Fan.getSpeed());
