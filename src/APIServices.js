export const playerAttributes = async () => {
    const url = "http://localhost:8000/api/players";
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}

export const singlePlayerData = async (playerName) => {
    const url = "http://localhost:8000/api/players/" + playerName;
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}

export const fifaPlayers = async () => {
    const url = "http://localhost:8000/api/fifa";
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}