import * as LogicLibrary from "./logic";

function changeScale() {
    var scale = document.getElementById("current_scale");
    var alteration = document.getElementById("current_alteration");
    
    scale!.innerText = LogicLibrary.ScalesGenerator.getScale();
    alteration!.innerText = LogicLibrary.ScalesGenerator.getAlteration();
}

document.getElementById("button")!.addEventListener('click',changeScale);