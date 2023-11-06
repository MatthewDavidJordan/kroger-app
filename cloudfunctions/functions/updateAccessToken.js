var accessToken = null;

async function updateAccessToken() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/tokens",
        "method": "POST",
    }

    try {
        const response = await $.ajax(settings);
        accessToken = response.access_token;
        // console.log("Access Token:", accessToken);
    }
    catch (error) {
        console.error("Error fetching access token:", error);
    }
    ;
}

async function startApp() {
    if (accessToken == null) {
        await updateAccessToken();
    }
    return accessToken;
}

updateAccessToken();