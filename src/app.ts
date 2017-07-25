import { ScalesLib } from "./ScalesLib";
import { Scale } from "./Scale";

function generateRandomScale() {
    var current = document.getElementById("current_exercise");
    var scale = ScalesLib.getRandomScale()
    current!.innerText = scale.toString();
}

document.getElementById("button")!.addEventListener('click', generateRandomScale);