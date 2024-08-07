import {
    getAllCapsuleLaunches
} from "../modules/capsules.js"

import {
    getAllCoresLaunches
} from "../modules/cores.js"

// imagenes para rockets

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

// imagenes para capsules

export const imageCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let section__image = document.querySelector("#section__image")
    let divs = [];

    launches.forEach(launch => {
    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/giphy.webp")
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    divs.push(div);
    });
    section__image.append(...divs)
}

// imagenes para Company

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

// imagenes para cores

export const imageCores = async() => {
    let launches = await getAllCoresLaunches();
    let section__image = document.querySelector("#section__image")
    let divs = [];

    launches.forEach(launch => {
    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/core.webp")
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    divs.push(div);
    });
    section__image.append(...divs)
}


// imagenes para crew

export const imageCrew = async(image) => {
    let section__image = document.querySelector("#section__image")

    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", image)
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    section__image.append(div)
}

// imagenes para dragons

export const imageDragons = async(flickr_images)=>{
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

// imagenes para landpads

export const imageLandpads = async(large)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    large.forEach(val => {
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

// imagenes para launches

export const imageLaunches = async(large) => {
    let section__image = document.querySelector("#section__image")

    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", large)
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    section__image.append(div)
}
// imagenes para Ships

export const imageShips = async(image) => {
    let section__image = document.querySelector("#section__image")

    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", image)
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    section__image.append(div)
}

// imagenes para Launchpads 

export const imageLaunchpads  = async(large) => {
    let section__image = document.querySelector("#section__image")
    let divs = [];
    large.forEach(val => {
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
// imagenes para history 

export const imagehistory = async() => {
    let launches = await getAllCoresLaunches();
    let section__image = document.querySelector("#section__image")
    let divs = [];

    launches.forEach(launch => {
    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/history.webp")
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    divs.push(div);
    });
    section__image.append(...divs)
}
// imagenes para history 

export const imagepayload = async() => {
    let launches = await getAllCoresLaunches();
    let section__image = document.querySelector("#section__image")
    let divs = [];

    launches.forEach(launch => {
    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/payload.webp")
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    divs.push(div);
    });
    section__image.append(...divs)
}
// imagenes para history 

export const imagestarli = async() => {
    let launches = await getAllCoresLaunches();
    let section__image = document.querySelector("#section__image")
    let divs = [];

    launches.forEach(launch => {
    let div = document.createElement("div");
    div.classList.add("carousel__item")
    let img = document.createElement("img");
    img.setAttribute("src", "storage/img/icons/starli.webp")
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    divs.push(div);
    });
    section__image.append(...divs)
}

// imagenes para Roadster

export const imageRoadster = async(flickr_images) => {
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

