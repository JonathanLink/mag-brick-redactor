var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var MediaObject = /** @class */ (function (_super) {
    __extends(MediaObject, _super);
    function MediaObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaObject.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, size = _a.size, props = __rest(_a, ["namespace", "className", "size"]);
        var classes = this.classes("MediaObject", size && "MediaObject--" + size, className);
        return React.createElement("div", __assign({ className: classes }, props));
    };
    return MediaObject;
}(NamespaceWrapper));
export default MediaObject;
var MediaObjectMedia = /** @class */ (function (_super) {
    __extends(MediaObjectMedia, _super);
    function MediaObjectMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaObjectMedia.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, position = _a.position, props = __rest(_a, ["namespace", "className", "position"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("MediaObject__media", "MediaObject__media--" + (position ? position : "left"), className) }));
    };
    return MediaObjectMedia;
}(NamespaceWrapper));
export { MediaObjectMedia };
var MediaObjectImage = /** @class */ (function (_super) {
    __extends(MediaObjectImage, _super);
    function MediaObjectImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaObjectImage.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("img", __assign({}, props, { className: this.classes("MediaObject__image", className) }));
    };
    return MediaObjectImage;
}(NamespaceWrapper));
export { MediaObjectImage };
var MediaObjectContent = /** @class */ (function (_super) {
    __extends(MediaObjectContent, _super);
    function MediaObjectContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaObjectContent.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("MediaObject__content", className) }));
    };
    return MediaObjectContent;
}(NamespaceWrapper));
export { MediaObjectContent };

//# sourceMappingURL=MediaObject.js.map
