document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "eyJ0eXAiOiJKV1QiLCJvcmlnaW4iOiJFYXJ0aGRhdGEgTG9naW4iLCJzaWciOiJlZGxqd3RwdWJrZXlfb3BzIiwiYWxnIjoiUlMyNTYifQ.eyJ0eXBlIjoiVXNlciIsInVpZCI6InZvaWRwZXAiLCJleHAiOjE3MDE5MTAzNTYsImlhdCI6MTY5NjcyNjM1NiwiaXNzIjoiRWFydGhkYXRhIExvZ2luIn0.pnO4MbwmteB0FhRI3Glg68DCXzWZ9TVoU_X3Sm49bodFi4sHMEVmJSUL1WveqhciPjAtc1vWs_D_PgXlXA6Gtyz7ITYpDcfmoFMxFYJM2HGzr013DdMBDz1lxQgKCrv__2Al-rk8Robz-yW3JiqTx7Wlq9XycQ7SAByx5DTvAdMxQ9SMiMF1KsgZ13DJQrD2wu1q6HB3GdW2q2BWjB7N_tp0bmMJOKfNyAjzx3XJf3uXe3WOEPINykrdqdwTTCvGmY84Hvj-H8sf-69wFGF5rIIB87ZMzLdSPaq9d1zIxK_THagqY13Xfsr3resA9dn1AjoR44t-S0TH4au0C4Um_g";
    const apiUrl = 'https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6.1.json';

    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var heatmapData = [
        [51.505, -0.09, 1],
        [51.505, -0.09, 13],
    ];
    var heat = L.heatLayer(heatmapData).addTo(map);
});