import {
    getAllCrewLaunches
} from "../modules/crew.js"

//informacion  d rockets

export const informationRockets = async(country)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Country"
    let small = document.createElement('small');
    small.textContent = country
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
    h3.textContent = "Read more"
    
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank");
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationDescriptionRocket = async(description)=>{
    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Description rocket"
    let small = document.createElement('small');
    small.textContent = description
    section__information__2.append(h3, small)
}

export const informationIdRocket = async(id)=>{
    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "ID rocket"
    let small = document.createElement('small');
    small.textContent = id
    section__information__3.append(h3, small)
}

//informacion  d capsules


export const informationTypeCapsules = async(type)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type Capsule"
    let small = document.createElement('small');
    small.textContent = type
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}

export const informationLastUpdateCapsules = async(last_update)=>{
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

export const informationStatusCapsules = async(status)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status Capsule"
    let small = document.createElement('small');
    small.textContent = status
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}

export const informationIdCapsule = async(id)=>{
    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "ID Capsule"
    let small = document.createElement('small');
    small.textContent = id
    section__information__3.append(h3, small)
}

// infomacion d company

export const summaryCompany = async(summary)=>{
    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Summary of the company:"
    let small = document.createElement('small');
    small.textContent = summary
    section__information__2.append(h3, small)
}

export const informationIdCompany = async(id)=>{
    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "ID Company"
    let small = document.createElement('small');
    small.textContent = id
    section__information__3.append(h3, small)
}

export const foundedCompany = async(founded)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Founded: "
    let small = document.createElement('small');
    small.textContent = founded
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
export const valuationCompany = async(valuation)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Valuation: "
    let small = document.createElement('small');
    small.textContent = valuation
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const companyFounder = async(founder)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Company Founder: "
    let small = document.createElement('small');
    small.textContent = founder
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const employeesCompany = async(employees)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Employees: "
    let small = document.createElement('small');
    small.textContent = employees
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}


export const headquartersCityCompany = async(city)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "City: "
    let small = document.createElement('small');
    small.textContent = city
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const headquarterStateCompany = async(state)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "State: "
    let small = document.createElement('small');
    small.textContent = state
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}


export const linksWebsiteCompany = async(website) => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    let divFirst = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `Space X links:`;

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = website;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "Website";

    divFirst.append(h3);
    divLast.append(a);
    divInformationContainer.append(divFirst, divLast)

    let information__2 = document.querySelector("#information__2");
    information__2.append(divInformationContainer);
}

export const linksFlickrCompany = async(flickr) => {
    let conterDiv = [];
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = flickr;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "Flickr";

    divLast.append(a);
    divInformationContainer.append(divLast);
    conterDiv.push(divInformationContainer);

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv);
}

export const linksTwitterCompany = async(twitter) => {
    let conterDiv = [];
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = twitter;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "Twitter";

    divLast.append(a);
    divInformationContainer.append(divLast);
    conterDiv.push(divInformationContainer);

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv);
}

export const linksElonTwitterCompany = async(elon_twitter) => {
    let conterDiv = [];
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = elon_twitter;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "Elon twitter";

    divLast.append(a)
    divInformationContainer.append(divLast)
    conterDiv.push(divInformationContainer)

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
}

// infomacion d cores


export const informationLastUpdateCores = async(last_update)=>{
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
export const informationStatusCores = async(status)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status Core"
    let small = document.createElement('small');
    small.textContent = status
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}
export const informationIdCores = async(id)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Id Core"
    let small = document.createElement('small');
    small.textContent = id
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}



// infomacion d crew

export const informationAgencyCrew = async(agency)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Agency"
    let small = document.createElement('small');
    small.textContent = agency
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}
export const informationStatusCrew = async(status)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status"
    let small = document.createElement('small');
    small.textContent = status
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}
export const informationIdCrew = async(id)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Id Crew"
    let small = document.createElement('small');
    small.textContent = id
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}


export const linksWikipediaCrew = async(wikipedia) => {
    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.innerHTML = "";

    let h3 = document.createElement("h3");
    h3.textContent = `Read More about this intertwined:`;
    let a = document.createElement("a");
    a.href = wikipedia;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "wikipedia";

    section__information__2.append(h3, a);
}


export const launchesInformationReadCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `Read More about crew`;

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = launch.links.wikipedia;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "Wikipedia";

    divFirst.append(h3)
    divLast.append(a)
    divInformationContainer.append(divFirst)
    divInformationContainer.append(divLast)
    conterDiv.push(divInformationContainer)
    });

    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.append(...conterDiv)
}


export const launchesInformationWebcastCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `Webcast`;

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = launch.links.webcast;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "webcast";

    divFirst.append(h3)
    divLast.append(a)
    divInformationContainer.append(divFirst)
    divInformationContainer.append(divLast)
    conterDiv.push(divInformationContainer)
    });

    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.append(...conterDiv)
}
export const launchesInformationArticleCrew = async() => {
    let launches = await getAllCrewLaunches();
    let conterDiv = [];

    launches.forEach(launch => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container")

    let divFirst = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `Article`;

    let divLast = document.createElement("div");
    let a = document.createElement("a");
    a.href = launch.links.article;
    a.target = "_blank";
    a.classList.add("btn");
    a.textContent = "article";

    divFirst.append(h3)
    divLast.append(a)
    divInformationContainer.append(divFirst)
    divInformationContainer.append(divLast)
    conterDiv.push(divInformationContainer)
    });
    
    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.append(...conterDiv)
}



// infomacion d Dragons

export const informationTypeDragon = async(type)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type"
    let small = document.createElement('small');
    small.textContent = type
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}
export const informationIdDragon= async(id)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Id Dragon"
    let small = document.createElement('small');
    small.textContent = id
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}

export const informationDescriptionDragons = async(description)=>{
    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Description Dragon"
    let small = document.createElement('small');
    small.textContent = description
    section__information__2.append(h3, small)
}

export const linksWikipediaDragon = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more"
    
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank");
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}


export const firstFlightDragon = async (first_flight)=>{
    let divFlight = document.createElement('div')
    divFlight.classList.add('description__container')
    let divLeft = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img)

    let divRight = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "First flight"
    let small = document.createElement('small');
    small.textContent = first_flight
    divRight.append(h3, small);

    divFlight.append(divLeft, divRight);

    let description__item = document.querySelector("#description__item")
    description__item.append(divFlight)
}

export const informationHeightDragon = async(Dragons)=>{
    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Height"

    let div1 = document.createElement('div')
    let p = document.createElement('p')
    p.textContent =" Meters y Feet"
    let small = document.createElement('small');
    small.textContent =`${Dragons.height_w_trunk.meters} kg, ${Dragons.height_w_trunk.feet} lb`;
    div1.append(p,small)

    let h3D = document.createElement("h3");
    h3D.textContent = "Diameter"

    let div3 = document.createElement('div')
    let p3 = document.createElement('p')
    p3.textContent ="  Meters y Feet"
    let small3 = document.createElement('small');
    small3.textContent = `${Dragons.diameter.meters} kg, ${Dragons.diameter.feet} lb`;
    div3.append(p3,small3)

    section__information__3.append( h3,div1, h3D, div3 )
}

// infomacion d history

export const informationIdHistory = async(id)=>{
    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "ID history"
    let small = document.createElement('small');
    small.textContent = id
    section__information__3.append(h3, small)
}


export const dateUtcHistory = async (event_date_utc)=>{
    let divFlight = document.createElement('div')
    divFlight.classList.add('description__container')
    let divLeft = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img)

    let divRight = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Event date utc"
    let small = document.createElement('small');
    small.textContent = event_date_utc
    divRight.append(h3, small);

    divFlight.append(divLeft, divRight);

    let description__item = document.querySelector("#description__item")
    description__item.append(divFlight)
}

export const dateUnixHistory = async (event_date_unix)=>{
    let divFlight = document.createElement('div')
    divFlight.classList.add('description__container')
    let divLeft = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img)

    let divRight = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Event date unix"
    let small = document.createElement('small');
    small.textContent = event_date_unix
    divRight.append(h3, small);

    divFlight.append(divLeft, divRight);

    let description__item = document.querySelector("#description__item")
    description__item.append(divFlight)
}

export const detailsHistory = async(details)=>{
    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Details history"
    let small = document.createElement('small');
    small.textContent = details
    section__information__2.append(h3, small)
}

export const linksHistory = async(links)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more"
    
    let a = document.createElement('a');
    a.setAttribute("href", links.article)
    a.setAttribute("target", "_blank");
    a.textContent = "Article"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
// infomacion d Landpads

export const fullNameLandpads = async(full_name)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Full name"
    let small = document.createElement('small');
    small.textContent = full_name
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}
export const statusLandpads = async(status)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status"
    let small = document.createElement('small');
    small.textContent = status
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}
export const typeLandpads = async(type)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type"
    let small = document.createElement('small');
    small.textContent = type
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}
export const localityLandpads = async(locality)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Locality"
    let small = document.createElement('small');
    small.textContent = locality
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}

export const regionLandpads = async(region)=>{
    let divLast = document.createElement('div');
    divLast.classList.add('description__container')
    let divLeft = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divLeft.append(img);
    
    let divRigth = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Region"
    let small = document.createElement('small');
    small.textContent = region
    divRigth.append(h3, small);
    divLast.append(divLeft, divRigth);

    let description__item = document.querySelector("#description__item")
    description__item.append(divLast)
}

export const informationIdLandpads = async(id)=>{
    let section__information__3 = document.querySelector("#section__information__3");
    section__information__3.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "ID Landpads"
    let small = document.createElement('small');
    small.textContent = id
    section__information__3.append(h3, small)
}

export const linksWikipediaLandpad = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mario.gif")
    img.setAttribute("width", "55px"); 
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more"
    
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank");
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
export const detailsLandpad = async(details)=>{
    let section__information__2 = document.querySelector("#section__information__2");
    section__information__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Details Landpad"
    let small = document.createElement('small');
    small.textContent = details
    section__information__2.append(h3, small)
}