const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
cssLink.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
cssLink.crossOrigin = "anonymous";
document.head.appendChild(cssLink);

const leafletCss = document.createElement("link");
leafletCss.rel = "stylesheet";
leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
leafletCss.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY:";
leafletCss.crossOrigin = "";

document.head.appendChild(leafletCss);

const leafletJs = document.createElement("script");
leafletJs.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
leafletJs.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
leafletJs.crossOrigin = "";
document.head.appendChild(leafletJs);