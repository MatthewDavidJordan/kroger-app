var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/connect/oauth2/token",
    "method": "POST",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic bWF0dHNkYXRhLTFlOGIyMDRlNDM0ZGMxNTQ1M2RkY2Q5NWQ5ZmQ4MTJhMzMwMjczMjc1MDE0NTk4NzE4NTp1RDJmT3I5QlpNNEJQQ2Q1RWVOenFZVmxGb19aZmlFVUk4SFBxZWFP"
    },
    "data": {
        "grant_type": "client_credentials",
        "scope": "product.compact"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
