export const getAllRockets = async ()=>{
    let res = await fetch ("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    console.log(data);
    return data; 
}
export const getAllRocketsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}

export const getRocketMassTotal = async()=>{
    let config = {
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify({
            "options": {
                "select":{
                    "mass": 1
                },
                "sort": {
                    "mass.kg": "desc"
                },
                "limit":1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs: [{mass} = maxMassRocket]} = await res.json();
    return mass;
}