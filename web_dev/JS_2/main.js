class Rectangle {
    constructor(width, length, color) {
        this.width = width;
        this.length = length;
        this.color = color;
    }

    area(){
        const area = this.width * this.length;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2,4,"pink")
const rect1 = new Rectangle(3,4,"light_pink")
console.log(rect); 
console.log(rect1);
const area = rect.area();
const area1 = rect1.area();
console.log(area);
console.log(area1);