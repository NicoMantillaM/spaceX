import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";

import { 
    getAllCapsules, 
    getAllCapsulesId
} from "../modules/capsules.js";

import { 
    getAllCompany, 
} from "../modules/company.js";

import { 
    nameRockets,
    nameCapsules,
    nameCompany
} from "./title.js";
import { 
    informationRockets,
    informationLaunchCostRocket,
    firstFlight,
    informationWebRocket,
    informationDescriptionRocket,
    informationIdRocket,
    informationIdCapsule,
    informationStatusCapsules,
    informationTypeCapsules,
    informationLastUpdateCapsules,
    foundedCompany,
    valuationCompany,
    informationIdCompany,
    companyFounder,
    summaryCompany,
    employeesCompany,
    headquartersCityCompany,
    headquarterStateCompany
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2,
    tableCapsuleColum1,
    tableCapsuleColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
import { 
    imageRockets,
    imageCapsules
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
    launchesInformationCapsules,
    launchesInformationNameCapsules,
    launchesInformationDateCapsules,
    launchesInformationDateLocalCapsules,
    launchesInformationDateUnixCapsules,
    launchesInformationReadCapsules,
} from "../components/progressBar.js";

// LOAD

export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let section__information__2 = document.querySelector("#section__information__2")
    section__information__2.innerHTML = `
    <div class="load" style="height: 150px;"></div>
    `;

    let section__information__3 = document.querySelector("#section__information__3")
    section__information__3.innerHTML = `
    <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}

// CLEAR

export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let section__information__2 = document.querySelector("#section__information__2")
    section__information__2.innerHTML = ``;

    let section__information__3 = document.querySelector("#section__information__3")
    section__information__3.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;

    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}

// ROCKETS

const getRocketsId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let Rocket = await getAllRocketsId(e.target.id);
    await clear();
    
    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await firstFlight(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)
    await informationDescriptionRocket(Rocket.description)
    await informationIdRocket(Rocket.id)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    
    return div;
}

// CAPSULES


const getCapsulesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Capsule = await getAllCapsulesId(e.target.id);
    await clear();

    await nameCapsules(Capsule.serial)
    await informationIdCapsule(Capsule.id)
    await informationStatusCapsules(Capsule.status)
    await informationTypeCapsules(Capsule.type)
    await informationLastUpdateCapsules(Capsule.last_update)

    await tableCapsuleColum1(Capsule)
    await tableCapsuleColum2(Capsule)

    await launchesInformationCapsules()
    await launchesInformationNameCapsules()
    await launchesInformationDateCapsules()
    await launchesInformationDateLocalCapsules()
    await launchesInformationDateUnixCapsules()
    await launchesInformationReadCapsules()
    await imageCapsules()
}

export const paginationCapsules = async(page=1, limit=4)=>{  

    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

// COMPANY

export const paginationCompany = async()=>{
    let Company = await getAllCompany();
    await clear();
    
    await nameCompany(Company.name)
    await foundedCompany(Company.founded)
    await valuationCompany(Company.valuation)
    await informationIdCompany(Company.id)
    await companyFounder(Company.founder)
    await summaryCompany(Company.summary)
    await employeesCompany(Company.employees)
    await headquartersCityCompany(Company.headquarters.city)
    await headquarterStateCompany(Company.headquarters.state)
}

