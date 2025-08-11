const grid = document.querySelector("#grid");
const width = window.innerWidth / 16;
const height = window.innerHeight / 16;
const permanent = "width: " + width + "px; height: " + height + "px;"
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
