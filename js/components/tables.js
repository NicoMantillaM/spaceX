

// Tablas para rockets

export const tableRocketColum1 = async (Rocket)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information rocket"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Rocket in service"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.active) ? "Active" : "Low" }`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Number of stages"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.stages}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of propellants"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.boosters}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Type"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.type}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.landing_legs.number}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.landing_legs.material) ? Rocket.landing_legs.material : ""}`
    div6.append(span6, strong6)

    div.append(div4, div1, div2, div3, div5, div6)
    information__table__1.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}
export const tableRocketColum2 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Engine information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Maximum power loss"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.engines.engine_loss_max) ? Rocket.engines.engine_loss_max : 0}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Engine availability"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.engines.layout) ? Rocket.engines.layout : ""}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of engines"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${(Rocket.engines.number) ? Rocket.engines.number : 0}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Stage 1 fuel"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${(Rocket.engines.propellant_1) ? Rocket.engines.propellant_1 : ""}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Stage 2 fuel"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${(Rocket.engines.propellant_2) ? Rocket.engines.propellant_2 : ""}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Type"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.engines.type) ? Rocket.engines.type : 0} ${(Rocket.engines.version) ? Rocket.engines.version : ""}`
    div6.append(span6, strong6)

    div.append(div6, div1, div2, div3, div4, div5)
    information__table__2.append(div)
    // 

    // <h3>Title</h3>
    // <hr>
    // <div class="table__container__1">
    //     <div>
    //         <span>Title</span>
    //         <strong>Hola</strong>
    //     </div>
        
    // </div>
}

// Tablas para capsules

export const tableCapsuleColum1 = async (Capsule)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Capsule Information "
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Type Capsule"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Capsule.type}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Reuse Count"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Capsule.reuse_count}`
    div2.append(span2, strong2)
    

    div.append( div1, div2,)
    information__table__1.append(div)
}
export const tableCapsuleColum2 = async (Capsule)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Landings information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Land Landings"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Capsule.land_landings}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Water Landings"
    let strong2 = document.createElement("strong");
    strong2.textContent =  `${Capsule.water_landings}`
    div2.append(span2, strong2)

    div.append( div1, div2)
    information__table__2.append(div)
}

// Tablas para company

export const tableCompanyColum1 = async (Company)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Company Charges "
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "CEO"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Company.ceo}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "CTO"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Company.cto}`
    div2.append(span2, strong2)
    
     // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "COO"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Company.coo}`
    div3.append(span3, strong3)
    
      // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "CTO PROPULSION"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Company.cto_propulsion}`
    div4.append(span4, strong4)
    

    div.append( div1, div2, div3, div4)
    information__table__1.append(div)
}
export const tableCompanyColum2 = async (Company)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Landings information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
        let div1 = document.createElement("div");
        let span1 = document.createElement("span");
        span1.textContent = "Launch Sites"
        let strong1 = document.createElement("strong");
        strong1.textContent = `${Company.launch_sites}`
        div1.append(span1, strong1)

        // 
        let div2 = document.createElement("div");
        let span2 = document.createElement("span");
        span2.textContent = "Test Sites"
        let strong2 = document.createElement("strong");
        strong2.textContent =  `${Company.test_sites}`
        div2.append(span2, strong2)

        // 
        let div3 = document.createElement("div");
        let span3 = document.createElement("span");
        span3.textContent = "Vehicles"
        let strong3 = document.createElement("strong");
        strong3.textContent =  `${Company.vehicles}`
        div3.append(span3, strong3)

    div.append( div1, div2, div3)
    information__table__2.append(div)
}


// Tablas para cores

export const tableCoresColum1 = async (Cores)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Lading Information "
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Reuse Count"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Cores.reuse_count}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Attempts"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Cores.rtls_attempts}`
    div2.append(span2, strong2)
    
     // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Landings"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Cores.rtls_landings}`
    div3.append(span3, strong3)
       

    div.append( div1, div2, div3)
    information__table__1.append(div)
}

export const tableCoresColum2 = async (Cores)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Landings information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
        let div1 = document.createElement("div");
        let span1 = document.createElement("span");
        span1.textContent = "Asds_attempts"
        let strong1 = document.createElement("strong");
        strong1.textContent = `${Cores.asds_attempts}`
        div1.append(span1, strong1)

        // 
        let div2 = document.createElement("div");
        let span2 = document.createElement("span");
        span2.textContent = "Asds_attempts"
        let strong2 = document.createElement("strong");
        strong2.textContent =  `${Cores.asds_attempts}`
        div2.append(span2, strong2)


    div.append( div1, div2)
    information__table__2.append(div)
}

// Tablas para Dragons

export const tableDragonColum1 = async (Dragons)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information Dragons"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Crew capacity"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Dragons.crew_capacity}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = " Sidewall angle deg "
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Dragons.sidewall_angle_deg}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Orbit Duration yr"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Dragons.orbit_duration_yr}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Dry Mass Kg"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Dragons.dry_mass_kg}`
    div4.append(span4, strong4)
 
    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Dry mass lb"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Dragons.dry_mass_lb}`
    div5.append(span5, strong5)

    div.append(div4, div1, div2, div3, div5)
    information__table__1.append(div)
}



export const tableDragonColum2 = async (Dragons)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Thrusters information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)


    Dragons.thrusters.forEach((thruster) => {
        let div = document.createElement("div");
        div.classList.add("table__container__1");

        let div1 = document.createElement("div");
        let span1 = document.createElement("span");
        span1.textContent = "Type";
        let strong1 = document.createElement("strong");
        strong1.textContent = thruster.type; 
        div1.append(span1, strong1);
        div.append(div1);

        let div2 = document.createElement("div");
        let span2 = document.createElement("span");
        span2.textContent = "Amount";
        let strong2 = document.createElement("strong");
        strong2.textContent = `${thruster.amount}`;
        div2.append(span2, strong2);
        div.append(div2);

        let div3 = document.createElement("div");
        let span3 = document.createElement("span");
        span3.textContent = "Pods";
        let strong3 = document.createElement("strong");
        strong3.textContent = `${thruster.pods}`;
        div3.append(span3, strong3);
        div.append(div3);

        let div4 = document.createElement("div");
        let span4 = document.createElement("span");
        span4.textContent = "Pods";
        let strong4 = document.createElement("strong");
        strong4.textContent = `${thruster.pods}`;
        div4.append(span4, strong4);
        div.append(div4);

        let div5 = document.createElement("div");
        let span5 = document.createElement("span");
        span5.textContent = "Fuel_1";
        let strong5 = document.createElement("strong");
        strong5.textContent = `${thruster.fuel_1}`;
        div5.append(span5, strong5);
        div.append(div5);

        let div6 = document.createElement("div");
        let span6 = document.createElement("span");
        span6.textContent = "Isp";
        let strong6 = document.createElement("strong");
        strong6.textContent = `${thruster.isp}`;
        div6.append(span6, strong6);
        div.append(div6);
        
        information__table__2.append(div);
    });
}
