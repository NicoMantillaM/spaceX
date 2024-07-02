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

// informacion de company

