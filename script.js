const grid = document.querySelector("#grid");
const button = document.querySelector("#button");
const gridSize = 600;
let prevDimension = 16;
let id = 0;
let innerID = 0;

function highlight(element, style){
    element.setAttribute("style", "background-color: blue; " + style);
}

function lowlight(element, style){
    element.setAttribute("style", "background-color: white; " + style);
}

function makeGrid(dimension){
    if(dimension != null && dimension <= 100){
        let side = gridSize / dimension;
        let permanent = "width: " + side + "px; height: " + side + "px;";
        for(let i = 0; i < dimension; i++){
            const div = document.createElement("div");
            div.setAttribute("id", "div" + id);
            div.setAttribute("class", "outerDiv");
            for(let j = 0; j < dimension; j++){
                const innerDiv = document.createElement("div");
                innerDiv.setAttribute("id", "innerDiv" + innerID);
                innerDiv.setAttribute("class", "innerDiv");
                innerDiv.setAttribute("style", permanent);
                innerDiv.addEventListener("mouseenter", () => highlight(innerDiv, permanent));
                innerDiv.addEventListener("mouseleave", () => lowlight(innerDiv, permanent));
                div.appendChild(innerDiv);
                innerID++;
            }
        innerID = 0;
        id++;
        grid.appendChild(div);
        }
        id = 0;
        innerID = 0;
    }
}

function redrawGrid(){
    let dimension = Number(prompt("Enter the size of grid you want!"));
    for(let i = 0; i < prevDimension; i++){
        grid.removeChild(document.getElementById("div" + i));
    }
    prevDimension = dimension;
    makeGrid(dimension);
}

button.textContent = "Change Grid Size";
button.addEventListener("click", () => redrawGrid())

makeGrid(prevDimension);


