export const getAllCrew = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCrewId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`)
    let data = await res.json();
    return data;
}

export const getAllCrewLaunches = async() => {
    let config = {
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
        "query": {
        "launches": [
            "5eb87d46ffd86e000604b388"
        ]
        },
        "options": {
        "populate": [
            {"path": "launches",}
        ]
        }
    })
    }
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config);
    let { docs: [{ launches }] } = await res.json();
    return launches;
}

// {
//     "name": "Soichi Noguchi",
//     "agency": "JAXA",
//     "image": "https://imgur.com/7B1jxl8.png",
//     "wikipedia": "https://en.wikipedia.org/wiki/Soichi_Noguchi",
//     "launches": [
//     "5eb87d4dffd86e000604b38e"
//     ],
//     "status": "active",
//     "id": "5f7f158bbf32c864a529b23f"
//     },