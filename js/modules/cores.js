export const getAllCores = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCoresId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/Cores/${id}`)
    let data = await res.json();
    return data;
}

export const getAllCoresLaunches = async() => {
    let config = {
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
        "query": {
        "launches": [
            "5eb87cd9ffd86e000604b32a"
        ]
        },
        "options": {
        "populate": [
            {"path": "launches",}
        ]
        }
    })
    }
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs: [{ launches }] } = await res.json();
    return launches;
}

// {
//     "block": null,
//     "reuse_count": 0,
//     "rtls_attempts": 0,
//     "rtls_landings": 0,
//     "asds_attempts": 0,
//     "asds_landings": 0,
//     "last_update": "Engine failure at T+33 seconds resulted in loss of vehicle",
//     "launches": [
//       "5eb87cd9ffd86e000604b32a"
//     ],
//     "serial": "Merlin1A",
//     "status": "lost",
//     "id": "5e9e289df35918033d3b2623"
//   },