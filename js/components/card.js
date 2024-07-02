import {
    getAllCapsuleLaunches
} from "../modules/capsules.js"

export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
}


export const imageCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let section__image = document.querySelector("#section__image")
    let divs = [];

    launches.forEach(launch => {
    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", launch.links.patch.small)
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    divs.push(div);
    });
    section__image.append(...divs)
}
export const imageCompany = async() => {
    let section__image = document.querySelector("#section__image")

    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/elon.jpg")
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    section__image.append(div)
}