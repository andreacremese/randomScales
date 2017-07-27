"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scale_1 = require("./Scale");
function generateRandomScale() {
    var current = document.getElementById("current_exercise");
    var scale = Scale_1.Scale.getRandomScale();
    current.innerText = scale.toString();
}
document.getElementById("button").addEventListener('click', generateRandomScale);
