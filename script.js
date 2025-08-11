const grid = document.querySelector("#grid");
let id = 0;
let innerID = 0;
for(let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.setAttribute("id", "div" + id);
    for(let j = 0; j < 16; j++){
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", "innerDiv" + innerID)
        div.appendChild(innerDiv);
        innerID++;
    }
    innerID = 0;
    id++;
    grid.appendChild(div);
}
