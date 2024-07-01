export const getAllCapsules = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}

export const getAllCapsuleLaunches = async() => {
    let config = {
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
        "query": {
        "launches": [
            "5eb87cdeffd86e000604b330"
        ]
        },
        "options": {
        "populate": [
            {"path": "launches",}
        ]
        }
    })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs: [{ launches }] } = await res.json();
    return launches;
}