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
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nav.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, size = _a.size, horizontal = _a.horizontal, hoverable = _a.hoverable, loud = _a.loud, disabled = _a.disabled, className = _a.className, props = __rest(_a, ["namespace", "size", "horizontal", "hoverable", "loud", "disabled", "className"]);
        var classes = this.classes("Nav", size && "Nav--" + size, horizontal && "Nav--horizontal", hoverable && "Nav--hoverable", loud && "Nav--loud", disabled && "is-disabled", className);
        return React.createElement("div", __assign({ className: classes }, props));
    };
    Nav.propTypes = {
        "size": PropTypes.oneOf(["small", "large"]),
        "horizontal": PropTypes.bool,
        "hoverable": PropTypes.bool,
        "loud": PropTypes.bool,
        "disabled": PropTypes.bool,
    };
    return Nav;
}(NamespaceWrapper));
export default Nav;
var NavItem = /** @class */ (function (_super) {
    __extends(NavItem, _super);
    function NavItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavItem.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, href = _a.href, className = _a.className, linkClassName = _a.linkClassName, disabled = _a.disabled, active = _a.active, props = __rest(_a, ["namespace", "href", "className", "linkClassName", "disabled", "active"]);
        // TODO :: find a way to disable links, that isn't the disabled prop on anchor
        return React.createElement("div", { className: this.classes("Nav__item", className) }, href ?
            React.createElement("a", __assign({ href: href, className: this.classes("Nav__link", active && "is-active", disabled && "is-disabled", linkClassName) }, props)) : props.children);
    };
    return NavItem;
}(NamespaceWrapper));
export { NavItem };

//# sourceMappingURL=Nav.js.map
