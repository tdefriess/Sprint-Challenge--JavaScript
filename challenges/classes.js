// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid{
    constructor(length, width, height){
        this.length = length,
        this.width = width,
        this.height = height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea = function(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)  
    }
}
let cuboid = new Cuboid(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboid{
    constructor(length, width, height){
        super(length, width, height)        
    }
    cubeVolume(){
        return this.width * this.width * this.width
    }
    cubeSurfaceArea(){
        return 6 * (this.width * this.width)
    }
}

let cube = new CubeMaker(5, 5, 5);
console.log(cube.cubeVolume()); // 100
console.log(cube.cubeSurfaceArea()); // 130