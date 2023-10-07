document.addEventListener("DOMContentLoaded", function () {
    const bootstrap = document.createElement("link");
    bootstrap.rel = "stylesheet";
    bootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
    bootstrap.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
    bootstrap.crossOrigin = "anonymous";

    const appCss = document.createElement("link");
    appCss.rel = "stylesheet";
    appCss.href = "/src/css/app.css";
    appCss.type = "text/css"

    document.head.appendChild(bootstrap);
    document.head.appendChild(appCss);
});