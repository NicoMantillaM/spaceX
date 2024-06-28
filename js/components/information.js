//informacion  d rockets

export const informationRockets = async(country, description,)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
     img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    
}

export const informationLaunchCostRocket = async(cost_per_launch) =>{
    let divCost = document.createElement('div');
    divCost.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
     img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);

    let divRigth = document.createElement('div')
    let h3 = document.createElement('h3');
    h3.textContent = "Estimated Cost per rocket launch"
    let small = document.createElement('small')
    small.textContent = new Intl.NumberFormat('cop').format(cost_per_launch)
    divRigth.append(h3, small);

    divCost.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divCost)
}
 
export const firstFlight = async (first_flight)=>{
    let divFlight = document.createElement('div')
    divFlight.classList.add('description__container')
    let divLeft = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img)

    let divRight = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Date of the First flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divRight.append(h3, small);

    divFlight.append(divLeft, divRight);

    let description__item = document.querySelector("#description__item")
    description__item.append(divFlight)
}

export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank");
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

//informacion  d capsules


export const informationCapsules = async(last_update)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
     img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last update"
    let small = document.createElement('small');
    small.textContent = last_update
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)

    
}


// {
//     "reuse_count": 0,
//     "water_landings": 1,
//     "land_landings": 0,
//     "last_update": "Hanging in atrium at SpaceX HQ in Hawthorne ",
//     "launches": [
//     "5eb87cdeffd86e000604b330"
//     ],
//     "serial": "C101",
//     "status": "retired",
//     "type": "Dragon 1.0",
//     "id": "5e9e2c5bf35918ed873b2664"
// },