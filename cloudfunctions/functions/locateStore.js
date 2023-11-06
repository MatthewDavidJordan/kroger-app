var locationId = null;
var storeName = null;

async function locateStore() {
    try {
        // Retrieve user inputs
        var chainName = document.getElementById("storeName").value;
        var zipcode = document.getElementById("zipcode").value;
        var storeInfo = "Searching for " + chainName + " in ZIP code " + zipcode;

        // call getLocationId function and await the result
        const { storeNameResult } = await getLocationId(chainName, zipcode, accessToken);

        // For this example, let's just display a message with the inputs
        document.getElementById("storeInfo").textContent = storeInfo;
        document.getElementById("storeNameDisplay").textContent = storeNameResult;
    } catch (error) {
        console.error("Error inside locateStore()", error);
    }
}