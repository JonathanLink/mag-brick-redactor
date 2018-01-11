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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, variant = _a.variant, level = _a.level, size = _a.size, loading = _a.loading, block = _a.block, active = _a.active, props = __rest(_a, ["variant", "level", "size", "loading", "block", "active"]);
        if (loading || props.disabled) {
            props.tabIndex = -1;
        }
        if (props.disabled) {
            props["aria-disabled"] = "true";
        }
        props.className = this.classes("Button", variant && "Button--" + variant, size && "Button--" + size, level && "Button--" + level, block && "Button--block", active && "is-active", loading && "is-loading", props.disabled && "is-disabled", this.props.className);
        return (props.href)
            ? React.createElement("a", __assign({ role: "button" }, props))
            : React.createElement("button", __assign({}, props));
    };
    Button.displayName = "Button";
    Button.propTypes = {
        "type": PropTypes.string,
        "href": PropTypes.string,
        // Modifiers
        "className": PropTypes.string,
        "level": PropTypes.oneOf(["info", "warning", "error", "success"]),
        "size": PropTypes.oneOf(["xsmall", "small", "large"]),
        "variant": PropTypes.oneOf(["primary", "secondary", "cta", "text", "flat"]),
        "block": PropTypes.bool,
        // States
        "disabled": PropTypes.bool,
        "active": PropTypes.bool,
        "loading": PropTypes.bool,
        // Handlers
        "onClick": PropTypes.func,
        "onBlur": PropTypes.func
    };
    return Button;
}(NamespaceWrapper));
export default Button;

//# sourceMappingURL=Button.js.map
