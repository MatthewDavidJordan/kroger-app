async function getProductId(filterBrand, filterTerm, locationId, access_token) {
    return new Promise((resolve, reject) => {
        let url;
        if (filterBrand != null) {
            url = `https://api.kroger.com/v1/products?filter.brand=${filterBrand}&filter.term=${filterTerm}&filter.locationId=${locationId}`;
        } else {
            url = `https://api.kroger.com/v1/products?filter.term=${filterTerm}&filter.locationId=${locationId}`;
        }

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Bearer ${access_token}`
            }
        };

        $.ajax(settings)
            .done((response) => {
                console.log(response);
                resolve({ resultingJSON: response });
            })
            .fail((error) => {
                console.error("Error fetching products:", error);
                reject(error);
            });
    });
}
