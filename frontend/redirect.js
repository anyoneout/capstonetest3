const rootPath = "/capstonetest3";
const path = window.location.pathname;
window.localStorage.setItem("redirect", path);
window.location.replace(rootPath);
