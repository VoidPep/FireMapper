document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "eyJ0eXAiOiJKV1QiLCJvcmlnaW4iOiJFYXJ0aGRhdGEgTG9naW4iLCJzaWciOiJlZGxqd3RwdWJrZXlfb3BzIiwiYWxnIjoiUlMyNTYifQ.eyJ0eXBlIjoiVXNlciIsInVpZCI6InZvaWRwZXAiLCJleHAiOjE3MDE5MTAzNTYsImlhdCI6MTY5NjcyNjM1NiwiaXNzIjoiRWFydGhkYXRhIExvZ2luIn0.pnO4MbwmteB0FhRI3Glg68DCXzWZ9TVoU_X3Sm49bodFi4sHMEVmJSUL1WveqhciPjAtc1vWs_D_PgXlXA6Gtyz7ITYpDcfmoFMxFYJM2HGzr013DdMBDz1lxQgKCrv__2Al-rk8Robz-yW3JiqTx7Wlq9XycQ7SAByx5DTvAdMxQ9SMiMF1KsgZ13DJQrD2wu1q6HB3GdW2q2BWjB7N_tp0bmMJOKfNyAjzx3XJf3uXe3WOEPINykrdqdwTTCvGmY84Hvj-H8sf-69wFGF5rIIB87ZMzLdSPaq9d1zIxK_THagqY13Xfsr3resA9dn1AjoR44t-S0TH4au0C4Um_g";
    const apiUrl = 'https://firms.modaps.eosdis.nasa.gov/api/area/csv/7c6c4a605d233ca874ed89bc635808c6/VIIRS_SNPP_NRT/world/1/2023-10-08';

    const map = L.map('map').setView([-23.442, -51.916], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var heatmapData = [];

    fetch(apiUrl, {})
        .then(response => console.log(response))
        .catch(error => {
            console.error(error);
        });
    // var heat = L.heatLayer(heatmapData, { radius: 25 }).addTo(map);
})