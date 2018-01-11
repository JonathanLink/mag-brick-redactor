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
import * as PropTypes from "prop-types";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, position = _a.position, app = _a.app, fixed = _a.fixed, className = _a.className, props = __rest(_a, ["namespace", "position", "app", "fixed", "className"]);
        var classes = this.classes("Navbar", position && "Navbar--" + position, app && "Navbar--app", fixed && "Navbar--fixed", className);
        return React.createElement("div", __assign({ className: classes }, props));
    };
    Navbar.propTypes = {
        "position": PropTypes.oneOf(["top", "bottom"]),
        "fixed": PropTypes.bool,
        "app": PropTypes.bool,
        "className": PropTypes.string,
    };
    return Navbar;
}(NamespaceWrapper));
export default Navbar;
var NavbarItem = /** @class */ (function (_super) {
    __extends(NavbarItem, _super);
    function NavbarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarItem.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({ className: this.classes("Navbar__item", className) }, props));
    };
    return NavbarItem;
}(NamespaceWrapper));
export { NavbarItem };
var NavbarSection = /** @class */ (function (_super) {
    __extends(NavbarSection, _super);
    function NavbarSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarSection.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, pullRight = _a.pullRight, props = __rest(_a, ["namespace", "className", "pullRight"]);
        return React.createElement("div", __assign({ className: this.classes("Navbar__section", (pullRight && "Navbar__section--right"), className) }, props));
    };
    return NavbarSection;
}(NamespaceWrapper));
export { NavbarSection };

//# sourceMappingURL=Navbar.js.map
