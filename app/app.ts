/// <reference path="logic.ts" />

function startApp() {
    var scale = document.getElementById("current_scale");
    var alteration = document.getElementById("current_alteration");

    scale!.innerText = Logic.getScale();
    alteration!.innerText = Logic.getAlteration();
}

document.getElementById("button")!.addEventListener('click',startApp);