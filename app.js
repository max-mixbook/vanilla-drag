var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var PosX = 0;
var PosY = 0;


svgElement.setAttribute("viewBox","0,0,58,58");
svgElement.setAttribute("width","58");
svgElement.setAttribute("height","58");



var square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
square.setAttribute("fill", "#e5e5e5");
square.setAttribute("stroke", "#ccc");
square.setAttribute("stroke-width", "1");
square.setAttribute("width", "50");
square.setAttribute("height", "50");
square.setAttribute("rx", "4");
square.setAttribute("ry", "4");
square.setAttribute("x", "4");
square.setAttribute("y", "4");

var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("fill", "#e5e5e5");
circle.setAttribute("stroke", "#ccc");
circle.setAttribute("r", "25");
circle.setAttribute("cx", "32");
circle.setAttribute("cy", "32");

var triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
triangle.setAttribute("fill", "#e5e5e5");
triangle.setAttribute("stroke", "#ccc");
triangle.setAttribute("points", "29,4 58,56 0,56");


function renderShape(shape){
    document.getElementsByTagName("body")[0].appendChild(svgElement);
    svgElement.appendChild(shape);
}

renderShape(triangle);



