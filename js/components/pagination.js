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
    getAllCrew, 
    getAllCrewId,

} from "../modules/crew.js";


import { 
    getAllCores, 
    getAllCoresId
} from "../modules/cores.js";

import { 
    getAllDragons, 
    getAllDragonsId
} from "../modules/dragons.js";

import { 
    getAllHistory, 
    getAllHistoryId
} from "../modules/history.js";

import { 
    getAllLandpads, 
    getAllLandpadsId
} from "../modules/landpads.js";

import { 
    getAllLaunches, 
    getAllLaunchesId
} from "../modules/launches.js";

import { 
    getAllShips, 
    getAllShipsId
} from "../modules/ships.js";

import { 
    getAllLaunchpads, 
    getAllLaunchpadsId
} from "../modules/launchpads.js";


import { 
    nameRockets,
    nameCapsules,
    nameCompany,
    nameCores,
    nameCrew,
    nameDragons,
    nameHistorys,
    nameLandpads,
    nameLaunches,
    nameShips,
    nameLaunchpads
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
    headquarterStateCompany,
    linksWebsiteCompany,
    linksFlickrCompany,
    linksTwitterCompany,
    linksElonTwitterCompany,
    informationLastUpdateCores,
    informationStatusCores,
    informationIdCores,
    informationAgencyCrew,
    informationStatusCrew,
    informationIdCrew,
    linksWikipediaCrew,
    launchesInformationReadCrew,
    launchesInformationWebcastCrew,
    launchesInformationArticleCrew,
    linksWikipediaDragon,
    informationIdDragon,
    informationTypeDragon,
    informationDescriptionDragons,
    firstFlightDragon,
    informationHeightDragon,
    informationIdHistory,
    dateUtcHistory,
    dateUnixHistory,
    detailsHistory,
    linksHistory,
    fullNameLandpads,
    statusLandpads,
    typeLandpads,
    localityLandpads,
    regionLandpads,
    informationIdLandpads,
    linksWikipediaLandpad,
    detailsLandpad,
    informationIdLaunches,
    dateUtcLaunches,
    dateUnixLaunches,
    dateLocalLaunches,
    dateFireUtclLaunches,
    dateFireUnixlLaunches,
    flightNumberlLaunches,
    detailsLaunches,
    InformationWebcastLaunches,
    InformationArticleLaunches,
    InformationWikipediaLaunches,
    informationIdShips,
    typeShips,
    legacyIdShips,
    homePortShips,
    activeShips,
    linkShips,
    informationIdLaunchpads,
    fullNameLaunchpads,
    localityLaunchpads,
    regionLaunchpads,
    detailsLaunchpads,
    informationStatusLaunchpads,
    informationStatusTimezone
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2,
    tableCapsuleColum1,
    tableCapsuleColum2,
    tableCompanyColum1,
    tableCompanyColum2,
    tableCoresColum1,
    tableCoresColum2,
    tableDragonColum1,
    tableDragonColum2,
    tableShipsColum1,
    tableShipsColum2,
    tableLaunchpadsColum1,
    tableLaunchpadsColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
import { 
    imageRockets,
    imageCapsules,
    imageCompany,
    imageCores,
    imageCrew,
    imageDragons,
    imageLandpads,
    imageLaunches,
    imageShips,
    imageLaunchpads
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
    launchesInformationCores,
    launchesInformationNameCores,
    launchesInformationDateCores,
    launchesInformationDateLocalCores,
    launchesInformationDateUnixCores,
    launchesInformationCrew,
    launchesInformationNameCrew,
    launchesInformationDateLocalCrew,
    launchesInformationDateUnixCrew,
    materialHeatShield,
    sizeHeatShield,
    tempHeatShield,
    devPartner,
    launchPayloadMass,
    launchPayloadVol,
    returnPayloadMass,
    returnPayloadVol,
    pressurizedDragonsVol,
    trunkVol,
    trunkCargo,
    landpadsLaunch
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
    
    await informationRockets(Rocket.country)
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
    await linksWebsiteCompany(Company.links.website)
    await linksFlickrCompany(Company.links.flickr)
    await linksTwitterCompany(Company.links.twitter)
    await linksElonTwitterCompany(Company.links.elon_twitter)

    await tableCompanyColum1(Company)
    await tableCompanyColum2(Company)

    await imageCompany()
}

// CORES

const getCoresId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCores(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Cores = await getAllCoresId(e.target.id);
    await clear();

    await nameCores(Cores.serial)
    await informationLastUpdateCores(Cores.last_update)
    await informationStatusCores(Cores.status)
    await informationIdCores(Cores.id)
    await imageCores()

    await launchesInformationCores()
    await launchesInformationNameCores()
    await launchesInformationDateCores()
    await launchesInformationDateLocalCores()
    await launchesInformationDateUnixCores()
    await tableCoresColum1(Cores)
    await tableCoresColum2(Cores)

}


export const paginationCores = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCoresId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCoresId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCoresId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}


// CREW

const getCrewId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Crew = await getAllCrewId(e.target.id);
    await clear();

    await nameCrew(Crew.name) 
    await imageCrew(Crew.image)
    await informationAgencyCrew(Crew.agency)
    await informationStatusCrew(Crew.status)
    await informationIdCrew(Crew.id)
    await linksWikipediaCrew(Crew.wikipedia)

    await launchesInformationCrew()
    await launchesInformationNameCrew()
    await launchesInformationDateLocalCrew()
    await launchesInformationDateUnixCrew()
    await launchesInformationReadCrew()
    await launchesInformationWebcastCrew()
    await launchesInformationArticleCrew()
}


export const paginationCrew = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCrewId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

// DRAGONS

const getDragonsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationDragons(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Dragons = await getAllDragonsId(e.target.id);
    await clear();

    await nameDragons(Dragons.name) 
    await imageDragons(Dragons.flickr_images)
    await informationTypeDragon(Dragons.type)
    await informationIdDragon(Dragons.id)
    await informationDescriptionDragons(Dragons.description)
    await linksWikipediaDragon(Dragons.wikipedia)
    await firstFlightDragon(Dragons.first_flight)
    await tableDragonColum1(Dragons)
    await tableDragonColum2(Dragons)
    await informationHeightDragon(Dragons)
    await materialHeatShield(Dragons.heat_shield.material);
    await sizeHeatShield(Dragons.heat_shield.size_meters);
    await tempHeatShield(Dragons.heat_shield.temp_degrees);
    await devPartner(Dragons.heat_shield.dev_partner);
    await launchPayloadMass(Dragons.launch_payload_mass.kg, Dragons.launch_payload_mass.lb);
    await launchPayloadVol(Dragons.launch_payload_vol.cubic_meters, Dragons.launch_payload_vol.cubic_feet);
    await returnPayloadMass(Dragons.return_payload_mass.kg, Dragons.return_payload_mass.lb);
    await returnPayloadVol(Dragons.return_payload_vol.cubic_meters, Dragons.return_payload_vol.cubic_feet);
    await pressurizedDragonsVol(Dragons.pressurized_Dragons.payload_volume.cubic_meters, Dragons.pressurized_Dragons.payload_volume.cubic_feet);
    await trunkVol(Dragons.trunk.trunk_volume.cubic_meters, Dragons.trunk.trunk_volume.cubic_feet);
    await trunkCargo(Dragons.trunk.cargo.solar_array, Dragons.trunk.cargo.unpressurized_cargo);
}


export const paginationDragons = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllDragons(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getDragonsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getDragonsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getDragonsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

// HISTORY

const getHistoryId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationHistory(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let History = await getAllHistoryId(e.target.id);
    await clear();

    await nameHistorys(History.title) 
    await informationIdHistory(History.id)
    await dateUtcHistory(History.event_date_utc)
    await dateUnixHistory(History.event_date_unix)
    await detailsHistory(History.details)
    await linksHistory(History.links)

}


export const paginationHistory = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllHistory(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getHistoryId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getHistoryId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getHistoryId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}


// Landpads

const getLandpadsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLandpads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Landpads = await getAllLandpadsId(e.target.id);
    await clear();

    await nameLandpads(Landpads.name) 
    await informationIdLandpads(Landpads.id)
    await fullNameLandpads(Landpads.full_name)
    await statusLandpads(Landpads.status)
    await typeLandpads(Landpads.type)

    await localityLandpads(Landpads.locality)
    await regionLandpads(Landpads.region)
    await statusLandpads(Landpads.status)
    await typeLandpads(Landpads.type)
    await linksWikipediaLandpad(Landpads.links)
    await detailsLandpad(Landpads.details)
    await imageLandpads(Landpads.images.large)
    await landpadsLaunch(Landpads.launches)
}


export const paginationLandpads = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLandpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLandpadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLandpadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLandpadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}


// Launches

const getLaunchesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Launches = await getAllLaunchesId(e.target.id);
    await clear();

    await nameLaunches(Launches.name) 
    await imageLaunches(Launches.links.patch.large)
    await informationIdLaunches(Launches.id)

    await dateUtcLaunches(Launches.date_utc) 
    await dateUnixLaunches(Launches.date_unix)
    await dateLocalLaunches(Launches.date_local)
    await dateFireUtclLaunches(Launches.static_fire_date_utc) 
    await dateFireUnixlLaunches(Launches.static_fire_date_unix)
    await flightNumberlLaunches(Launches.flight_number)

    await detailsLaunches(Launches.details) 
    await InformationWebcastLaunches(Launches.links.webcast)
    await InformationArticleLaunches(Launches.links.article)
    await InformationWikipediaLaunches(Launches.links.wikipedia)
    
}


export const paginationLaunches = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunches(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

// Ships

const getShipsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationShips(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Ships = await getAllShipsId(e.target.id);
    await clear();

    await nameShips(Ships.name) 
    await imageShips(Ships.image)
    await informationIdShips(Ships.id)

    await typeShips(Ships.type) 
    await legacyIdShips(Ships.legacy_id)
    await homePortShips(Ships.home_port)
    await activeShips(Ships.active) 
    await linkShips(Ships.link)

    await tableShipsColum1(Ships) 
    await tableShipsColum2(Ships)
    await imageShips(Ships.image)    
}


export const paginationShips = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllShips(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getShipsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getShipsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getShipsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}


// Launchpads

const getLaunchpadsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Launchpads = await getAllLaunchpadsId(e.target.id);
    await clear();

    await nameLaunchpads(Launchpads.name) 
    await imageLaunchpads(Launchpads.images.large)
    await informationIdLaunchpads(Launchpads.id)

    await fullNameLaunchpads(Launchpads.full_name)
    await localityLaunchpads(Launchpads.locality)
    await regionLaunchpads(Launchpads.region) 
    await detailsLaunchpads(Launchpads.details)

    await informationStatusLaunchpads(Launchpads.status) 
    await informationStatusTimezone(Launchpads.timezone)

    await tableLaunchpadsColum1(Launchpads) 
    await tableLaunchpadsColum2(Launchpads) 
}


export const paginationLaunchpads = async(page=1, limit=4)=>{  
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunchpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchpadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchpadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchpadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}