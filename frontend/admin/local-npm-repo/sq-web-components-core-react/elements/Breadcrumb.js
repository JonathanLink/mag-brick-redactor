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
var Breadcrumb = /** @class */ (function (_super) {
    __extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function () {
        var className = this.classes("Breadcrumb", this.props.className != null ? this.props.className : "");
        return React.createElement("div", { className: className, role: "navigation" },
            React.createElement("ol", { className: this.classes("Breadcrumb__items") }, this.props.children));
    };
    Breadcrumb.displayName = "Breadcrumb";
    Breadcrumb.propTypes = {
        // Modifiers
        "className": PropTypes.string,
    };
    return Breadcrumb;
}(NamespaceWrapper));
export default Breadcrumb;
var BreadcrumbItem = /** @class */ (function (_super) {
    __extends(BreadcrumbItem, _super);
    function BreadcrumbItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbItem.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, active = _a.active, href = _a.href, title = _a.title, target = _a.target, className = _a.className, props = __rest(_a, ["namespace", "active", "href", "title", "target", "className"]);
        var linkProps = { href: href, title: title, target: target };
        return React.createElement("li", { className: this.classes("Breadcrumb__item", active ? "is-current" : "", className) }, active ?
            React.createElement("span", __assign({}, props)) :
            React.createElement("a", __assign({}, props, linkProps)));
    };
    return BreadcrumbItem;
}(NamespaceWrapper));
export { BreadcrumbItem };

//# sourceMappingURL=Breadcrumb.js.map
