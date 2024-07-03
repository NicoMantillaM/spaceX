import { 
    getRocketMassTotal, 
    getRocketPayloadWeightsTotal, 
    getRocketHeightTotal, 
    getRocketDiameterTotal,
    getRocketSecondStageCompositeFairingDiameterTotal,
    getRocketSecondStageCompositeFairingHeightTotal
} from "../modules/rockets.js";

import {
    getAllCapsuleLaunches
} from "../modules/capsules.js"

import {
    getAllCoresLaunches
} from "../modules/cores.js"

import {
    getAllCrewLaunches
} from "../modules/crew.js"


export const progressRocketWeight = async(Rockets)=>{
    let {kg} = await getRocketMassTotal();
    let conterDiv = [];
    [Rockets].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = "Rocket weight :";
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg
        ProgressFist.value = `${val.mass.kg}`;
        ProgressFist.textContent = `${val.mass.kg}%`;
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.mass.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.mass.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const progressPayloadWeights = async(Rockets)=>{
    let {kg} = await getRocketPayloadWeightsTotal();
    let conterDiv = [];
    Rockets.payload_weights.forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `${val.name} :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg;
        ProgressFist.value = `${val.kg}`;
        ProgressFist.textContent = `${val.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketHeightTotal();
    let conterDiv = [];
    [Rockets.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket Height :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketDiameterTotal();
    let conterDiv = [];
    [Rockets.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket diameter :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressSecondStageDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingDiameterTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Diameter rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}
export const progressSecondStageHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingHeightTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Height rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}

export const launchesInformationCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `Launches:`;

    let p = document.createElement("p");
    p.textContent = `Flight Number:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.flight_number}`

        divFirst.append(h3)
        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationNameCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Name:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.name}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationDateCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Utc:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_utc}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationDateLocalCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Local:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_local}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}
export const launchesInformationDateUnixCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Unix:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_unix}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}
export const launchesInformationReadCapsules = async() => {
    let launches = await getAllCapsuleLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Read More:`;

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = launch.links.wikipedia;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "Wikipedia";

    divFirst.append(p)
    divLast.append(a)
    divInformationContainer.append(divFirst)
    divInformationContainer.append(divLast)
    conterDiv.push(divInformationContainer)
    });

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

// informacion de cores


export const launchesInformationCores = async() => {
    let launches = await getAllCoresLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `Launches:`;

    let p = document.createElement("p");
    p.textContent = `Flight Number:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.flight_number}`

        divFirst.append(h3)
        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationNameCores = async() => {
    let launches = await getAllCoresLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Name:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.name}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationDateCores = async() => {
    let launches = await getAllCoresLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Utc:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_utc}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationDateLocalCores = async() => {
    let launches = await getAllCoresLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Local:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_local}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}
export const launchesInformationDateUnixCores = async() => {
    let launches = await getAllCoresLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Unix:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_unix}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}


// informacion de crew


export const launchesInformationCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `Launches:`;

    let p = document.createElement("p");
    p.textContent = `Flight Number:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.flight_number}`

        divFirst.append(h3)
        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationNameCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Name:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.name}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationDateCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Utc:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_utc}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

export const launchesInformationDateLocalCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Local:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_local}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}
export const launchesInformationDateUnixCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = `Date Unix:`;

    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.innerHTML = `${launch.date_unix}`

        divFirst.append(p)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}
export const materialHeatShield = async(material) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Material:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = material;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};
export const sizeHeatShield  = async(size) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Size:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = size;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};
export const tempHeatShield  = async(temp) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Temp:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = temp;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const devPartner   = async(partner) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Socio:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = partner;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const launchPayloadMass  = async(massKg,massLb ) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Masa:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = `${massKg} kg, ${massLb} lb`;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const launchPayloadVol   = async(cubicMeters,cubicFeet ) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Volumen:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent =`${cubicMeters} m³, ${cubicFeet} ft³`;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const returnPayloadMass = async(massKg,massLb ) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Masa-Retorno:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent =`${massKg} kg, ${massLb} lb`;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const returnPayloadVol  = async(cubicMeters,cubicFeet ) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Volumen-Retorno:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent =`${cubicMeters} m³, ${cubicFeet} ft³`;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const pressurizedDragonsVol = async(cubicMeters,cubicFeet ) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Volumen-Cápsula :";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent =`${cubicMeters} m³, ${cubicFeet} ft³`;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const trunkVol = async(cubicMeters,cubicFeet ) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Volumen-Tronco  :";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = `${cubicMeters} m³, ${cubicFeet} ft³`;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};

export const trunkCargo = async(solarArray,unpressurizedCargo ) => {
    let div = document.createElement('div');
    div.classList.add('information__container');
    
    let divFirst = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Paneles Solares y Carga:";
    divFirst.append(p);
    
    let divLast = document.createElement('div');
    let span = document.createElement('span');
    span.textContent =`Paneles Solares: ${solarArray}, Carga no Presurizada: ${unpressurizedCargo}`;
    divLast.append(span);
    
    div.append(divFirst, divLast);
    document.querySelector("#information__2").append(div);
};