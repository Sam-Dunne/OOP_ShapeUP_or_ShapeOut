//references shape submit buttons from DOM
const btnAddRectangle = document.getElementById("btn-add-rectangle");
const btnAddSquare = document.getElementById("btn-add-square");
const btnAddCircle = document.getElementById("btn-add-circle");
const btnAddTriangle = document.getElementById("btn-add-triangle");
// references shape input fields
const rectangleHeightInputField = document.getElementById("rectangle-height-input-field");
const rectangleWidthInputField = document.getElementById("rectangle-width-input-field");
const squareSideLengthInputField = document.getElementById("square-side-length-input-field");
const circleRadiusInputField = document.getElementById("circle-radius-input-field");
const triangleHeightInputField = document.getElementById("triangle-height-input-field");
// references h5 to hold calculated measurement values
const measurementShape = document.getElementById("rtn-param-shape");
const measurementHeight = document.getElementById("rtn-param-height");
const measurementWidth = document.getElementById("rtn-param-width");
const measurementArea = document.getElementById("rtn-param-area");
const measurementPerimeter = document.getElementById("rtn-param-perimeter");
const measurementRadius = document.getElementById("rtn-param-radius");
// references div#shapes-container
const shapesContainer = document.getElementById("shapes-container");
//references h4#param-header-width
const measurementWidthHeader = document.getElementById("param-header-width");

// clears measurements... called when shape is dblclicked
function clearMeasurements() {
    measurementShape.innerText = '';
    measurementHeight.innerText = '';
    measurementWidth.innerText = '';
    measurementArea.innerText = '';   
    measurementPerimeter.innerText = '';       
    measurementRadius.innerText = '';    
};

// Add Rectangle
btnAddRectangle.addEventListener('click', function() {
    let height = rectangleHeightInputField.value;
    let width = rectangleWidthInputField.value;
    let rectangle = new Rectangle(height, width);
    if (height <= 500 && width <= 500) {
        rectangle.makeRectangle();
        rectangleHeightInputField.value = 'height px';
        rectangleWidthInputField.value = 'width px';
    } else {
        rectangleHeightInputField.value = 'height px';
        rectangleWidthInputField.value = 'width px';
        alert('Max Values 500! Try a lower number');
    }   
})
class Rectangle {
    constructor(height , width) {
        this.height = height;
        this.width = width;
        this.rectangle = document.createElement('div');
        this.rectangle.className = 'rectangle';
        this.rectangle.addEventListener('click', () => this.getDetails());
        this.rectangle.addEventListener('dblclick', () => this.removeDetails())
    }
    makeRectangle() {
        this.rectangle.style.height = this.height + 'px';
        this.rectangle.style.width = this.width + 'px';
        this.rectangle.style.top = `${Math.floor(Math.random() * 100 + 345)}px`;
        this.rectangle.style.left = `${Math.floor(Math.random() * 100 + 345)}px`;
        shapesContainer.appendChild(this.rectangle);
    }
    getDetails() {
        measurementShape.innerText = 'Rectangle';
        measurementWidthHeader.innerText = 'Width';
        measurementHeight.innerText = `${this.height}px`;
        measurementWidth.innerText = `${this.width}px`;
        measurementArea.innerText = `${this.height * this.width}px`;
        measurementPerimeter.innerText = `${this.height*2 + this.width*2}px`;
        measurementRadius.innerText = 'N/A';
    }
    removeDetails() {
        this.rectangle.remove();
        clearMeasurements()
    }
}

// Add Square
btnAddSquare.addEventListener('click', function() {
    let sideLength = squareSideLengthInputField.value;
    let square = new Square(sideLength);
    if(sideLength <= 500) {
        square.makeSquare();
        squareSideLengthInputField.value = "side length px";    
    } else {
        alert('Max Value 500! Try a lower number');
        squareSideLengthInputField.value = "side length px";    
    }
})
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;  
        this.square = document.createElement('div');
        this.square.className = 'square';
        this.square.addEventListener('click', () => this.getDetails())   
        this.square.addEventListener('dblclick', () => this.removeDetails())
    }
    makeSquare() {
        this.square.style.height = this.sideLength  + 'px';
        this.square.style.width = this.sideLength  + 'px';
        this.square.style.top = `${Math.floor(Math.random() * 100 + 345)}px`;
        this.square.style.left = `${Math.floor(Math.random() * 95 + 315)}px`;
        shapesContainer.appendChild(this.square);
    }
    getDetails() {
        measurementShape.innerText = 'Square';
        measurementWidthHeader.innerText = 'Width';
        measurementHeight.innerText = `${this.sideLength}px`;
        measurementWidth.innerText = `${this.sideLength}px`;
        measurementArea.innerText = `${this.sideLength * this.sideLength}px`;
        measurementPerimeter.innerText = `${this.sideLength * 4}px`;
        measurementRadius.innerText = 'N/A';
    }
    removeDetails() {
        this.square.remove();
        clearMeasurements()
    }
}

//Add Circle
btnAddCircle.addEventListener('click', function() {
    let radius = circleRadiusInputField.value;
    let circle = new Circle(radius);
    if (radius <= 200) {
        circle.makeCircle();
        circleRadiusInputField.value = 'radius px';
    } else {
        alert('Max Value 200! Try a lower number');
        circleRadiusInputField.value = 'radius px';
    }
})
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.circle = document.createElement('div');
        this.circle.className = 'circle';
        this.circle.addEventListener('click', () => this.getDetails());
        this.circle.addEventListener('dblclick' , () => this.removeDetails());
    }
    makeCircle() {
        this.circle.style.height = `${this.radius * 2}px`;
        this.circle.style.width = `${this.radius * 2}px`;  
        this.circle.style.top = `${Math.floor(Math.random() * 195 + 350)}px`;
        this.circle.style.left = `${Math.floor(Math.random() * 200 + 200)}px`;
        shapesContainer.appendChild(this.circle);      
    }
    getDetails() {
        measurementShape.innerText = 'Circle';
        measurementWidthHeader.innerText = 'Width';
        measurementHeight.innerText = 'N/A';
        measurementWidth.innerText = 'N/A';
        measurementArea.innerText = '~ ' + Math.floor(Math.PI * Math.pow(this.radius, 2)) + 'px';   //'pi times radius squared'
        measurementPerimeter.innerText = '~ ' + Math.floor(2 * Math.PI * this.radius) + 'px';       //2PI * radius
        measurementRadius.innerText = (`${this.radius}px`);
    }
    removeDetails() {
        this.circle.remove();
        clearMeasurements()
    }
}
// Add Triangle
btnAddTriangle.addEventListener('click', function() {
    let height = triangleHeightInputField.value;
    let triangle = new Triangle(height);
    if (height <= 300) {
        triangle.makeTriangle();
        triangleHeightInputField.value = 'height px';
    } else {
        alert('Max Value 300! Try a lower number');
        triangleHeightInputField.value = 'height px';
    }
})
class Triangle {
    constructor(height) {
        this.height = height;
        this.triangle = document.createElement('div');
        this.triangle.className = 'triangle';
        this.triangle.addEventListener('click', () => this.getDetails());
        this.triangle.addEventListener('dblclick', () => this.removeDetails());
    }
    makeTriangle() {
        this.triangle.style.borderLeftWidth = `${this.height}px`;
        this.triangle.style.borderBottomWidth = `${this.height}px`;
        this.triangle.style.top = `${Math.floor(Math.random() * 240 + 350)}px`;
        this.triangle.style.left = `${Math.floor(Math.random() * 245 + 315)}px`;
        shapesContainer.appendChild(this.triangle);
    }
    getDetails() {
        measurementWidthHeader.innerText = 'Hypotenus';
        measurementShape.innerText = 'Triangle';
        measurementHeight.innerText = `${this.height}px`;
        measurementWidth.innerText = `~${Math.floor(this.height * Math.sqrt(2))}px`;
        measurementArea.innerText = `${0.5 * this.height * this.height}px`;   
        measurementPerimeter.innerText = `${Math.floor(this.height * 2 + Math.sqrt(2)* this.height)}px`;     
        measurementRadius.innerText = 'N/A';
    }
    removeDetails() {
        this.triangle.remove();
        measurementWidthHeader.innerText = 'Width';
        clearMeasurements();
    }
}






