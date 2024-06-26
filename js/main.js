import { getAllRockets } from "./modules/rockets.js"
import { rocket  } from "./components/rocketin.js"

console.log(getAllRockets());

let header__title = document.querySelector("#header__title");

addEventListener("DOMContentLoaded", async e =>{
    let info = await getAllRockets();
    console.log(info);
    info.forEach(element => {
        console.log(element);
        info = element;
    });
    header__title.innerHTML = await (rocket(info))

})