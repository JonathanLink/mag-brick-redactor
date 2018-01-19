export function isRTL(elem) {
    var cs = window.getComputedStyle(elem, null).getPropertyValue("direction");
    return (cs || "").toLowerCase() === "rtl";
}
var isLegacyIE = /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
export function isIE9OrBelow() {
    return isLegacyIE;
}

//# sourceMappingURL=utils.js.map
