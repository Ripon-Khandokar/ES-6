class circle  {
    constructor (radius,color){
        this.radius = radius;
        this.color = color;
        this.location =function(){
            return this.radius+ this.color;
        };
    }
}
let one = new circle(4,4);
console.log(one.radius);