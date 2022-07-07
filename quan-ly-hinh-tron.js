var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = 'green';
        this.radius = 20;
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circlelist = [];
circlelist.push(new Circle('red', 29));
circlelist.push(new Circle('yellow', 50));
circlelist.push(new Circle('orange', 57));
function showCircle(circle) {
    console.log("hinh tron nay co mau ".concat(circle.color, " va ban kinh ").concat(circle.radius));
}
circlelist.forEach(showCircle);
