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

export const squad = async (team) => {
    const url = "http://localhost:8000/api/squad/" + team;
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}

export const listPlayer = async (body) => {
    const url = "http://localhost:8000/api/listPlayer";
    var details = {
        'playerName' : body.playerName,
        'price': body.price,
        'team': body.team
    };
    var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    formBody = formBody.join("&");  
    const data2 = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formBody
    })

    const response = await data2.json();
    return response
}

export const minusSalary = async (body) => {
    const url = "http://localhost:8000/api/minusSalary";
    var details = {
        'amount' : body.value,
        'team': body.team,
        'salary': body.salary
    };
    var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    formBody = formBody.join("&");  
    const data2 = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formBody
    })

    const response = await data2.json();
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

export const auctionPlayer = async (body) => {
    const url = "http://localhost:8000/api/auctionPlayer/" + body.role + "/" + body.rank;
    const data2 = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data2.json();
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

export const allMatches = async (homeTeam, awayTeam, homeScore, awayScore, season) => {
    const url = "http://localhost:8000/api/matches";
    var details = {
        'homeTeam': homeTeam,
        'awayTeam': awayTeam,
        'homeScore': homeScore,
        'awayScore': awayScore,
        'season': season
    };
    var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    formBody = formBody.join("&");      
    const data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formBody
    })

    const response = await data.json();
    return response
}

export const updateFifaPlayerData = async (club, money, teamWorth, salary) => {
    const url = "http://localhost:8000/api/fifaplayerStats/"+ club;
    var details = {
        'money' : money,
        'teamWorth': teamWorth,
        'salary': salary
    };
    var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    formBody = formBody.join("&");      
    const data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formBody
    })

    const response = await data.json();
    return response
}

export const getMatches = async () => {
    const url = "http://localhost:8000/api/allmatches";
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}

export const getTeamPlayers = async (team) => {
    const url = "http://localhost:8000/api/teamPrice/" + team;
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}

export const deleteMatch = async (matchID) => {
    const url = "http://localhost:8000/api/matchdelete/" + matchID;
    const data = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        }
    })

    const response = await data.json();
    return response
}

export const updateMatch = async (homeTeam, awayTeam, homeScore, awayScore, matchID) => {
    const url = "http://localhost:8000/api/matchupdate/" + matchID;
    var details = {
        'homeTeam': homeTeam,
        'awayTeam': awayTeam,
        'homeScore': homeScore,
        'awayScore': awayScore
    };
    var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    formBody = formBody.join("&");      
    const data = await fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formBody
    })

    const response = await data.json();
    return response
}