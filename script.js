const grid = document.querySelector("#grid");
const button = document.querySelector("#button");
const dimension = 16;
const gridSize = 600;
const side = gridSize / dimension;
const permanent = "width: " + side + "px; height: " + side + "px;";
let id = 0;
let innerID = 0;

function highlight(element){
    element.setAttribute("style", "background-color: blue; " + permanent);
}

function lowlight(element){
    element.setAttribute("style", "background-color: white; " + permanent);
}

for(let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.setAttribute("id", "div" + id);
    div.setAttribute("class", "outerDiv");
    for(let j = 0; j < 16; j++){
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", "innerDiv" + innerID);
        innerDiv.setAttribute("class", "innerDiv");
        innerDiv.setAttribute("style", permanent);
        innerDiv.addEventListener("mouseenter", () => highlight(innerDiv));
        innerDiv.addEventListener("mouseleave", () => lowlight(innerDiv));
        div.appendChild(innerDiv);
        innerID++;
    }
    innerID = 0;
    id++;
    grid.appendChild(div);
}
