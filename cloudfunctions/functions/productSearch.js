var brandName = null;
var productName = null;

async function productSearch() {
    try {
        // Retrieve user inputs
        var brandName = document.getElementById("brand").value;
        var productName = document.getElementById("product").value;
        var productInfo = null;

        if (brandName != null) {
            productInfo = "Searching for " + productName
                + " with the brand " + brandName;
        } else {
            productInfo = "Searching for " + productName;
        }
        // call getProductId function and await the result
        const { resultingJSON } = await getProductId(brandName, productName, locationId, accessToken);

        // For this example, let's just display a message with the inputs
        document.getElementById("productSearchInfo").textContent = productInfo;
    } catch (error) {
        console.error("Error inside locateStore()", error);
    }
}