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
import MenuItem from "./MenuItem";
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, block = _a.block, size = _a.size, props = __rest(_a, ["namespace", "className", "block", "size"]);
        var classes = this.classes("Menu", (block && "Menu--block"), (size && "Menu--" + size), className);
        return React.createElement("ul", __assign({ className: classes }, props));
    };
    return Menu;
}(NamespaceWrapper));
export default Menu;
var MenuHeader = /** @class */ (function (_super) {
    __extends(MenuHeader, _super);
    function MenuHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuHeader.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("li", __assign({ className: this.classes("Menu__header", className) }, props));
    };
    return MenuHeader;
}(NamespaceWrapper));
export { MenuHeader };
var MenuDivider = /** @class */ (function (_super) {
    __extends(MenuDivider, _super);
    function MenuDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuDivider.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("li", __assign({ className: this.classes("Menu__divider " + className) }, props));
    };
    return MenuDivider;
}(NamespaceWrapper));
export { MenuDivider };
export { MenuItem };

//# sourceMappingURL=Menu.js.map
