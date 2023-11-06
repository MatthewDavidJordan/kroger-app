async function getLocationId(chain, zip_code, access_token) {
    return new Promise((resolve, reject) => {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://api.kroger.com/v1/locations?filter.chain=${chain}&filter.zipCode.near=${zip_code}&filter.limit=3`,
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Bearer ${access_token}`
            }
        }
        $.ajax(settings)
            .done((response) => {
                console.log(response);
                locationId = response.data[0].locationId;
                var storeId = "Location ID: " + locationId;
                storeName = "Store Name: " + response.data[0].name;
                console.log(storeId);
                console.log(storeName);
                resolve({ storeNameResult: storeName });
            })
            .fail((error) => {
                console.error("Error fetching location ID:", error);
                reject(error);
            });
    });
}