const grid = document.querySelector("#grid");
const width = window.innerWidth / 16;
const height = window.innerHeight / 16;
let id = 0;
let innerID = 0;
for(let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.setAttribute("id", "div" + id);
    div.setAttribute("class", "outerDiv");
    for(let j = 0; j < 16; j++){
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", "innerDiv" + innerID);
        innerDiv.setAttribute("class", "innerDiv");
        innerDiv.setAttribute("style", "width: " + width + "px; height: " + height + "px;");

        div.appendChild(innerDiv);
        innerID++;
    }
    innerID = 0;
    id++;
    grid.appendChild(div);
}
