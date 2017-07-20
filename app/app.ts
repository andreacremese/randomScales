function startApp() {
    var scale = document.getElementById("current_scale");
    var alteration = document.getElementById("current_alteration");

    scale.innerText = "F#";
    alteration.innerText = "dom";
}

document.getElementById("button").addEventListener('click',startApp);