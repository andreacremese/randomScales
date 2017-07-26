import { Scale } from "./Scale";

function generateRandomScale() {
    var current = document.getElementById("current_exercise");
    var scale = Scale.getRandomScale()
    current!.innerText = scale.toString();
}

document.getElementById("button")!.addEventListener('click', generateRandomScale);