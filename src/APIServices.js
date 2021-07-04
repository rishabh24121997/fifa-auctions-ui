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

export const allTransactions = async () => {
    const url = "http://localhost:8000/api/alltransactions";
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}

export const playerTransaction = async (playerName, playerPrice, playerFrom, playerTo, playerPosition) => {
    const url = "http://localhost:8000/api/transferAdmin/"
    var details = {
        'name': playerName,
        'price': playerPrice,
        'from': playerFrom,
        'team': playerTo,
        'position': playerPosition
    };
    var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    formBody = formBody.join("&");      
    const data1 = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formBody
    })

    const response1 = await data1.json();
    // return response1

    const url2 = "http://localhost:8000/api/transfer/"
    const data2 = await fetch(url2, {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formBody
    })

    const response2 = await data2.json();
    const response = response1.message + " " + response2.message;
    return response
}