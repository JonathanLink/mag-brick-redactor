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
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.render = function () {
        var _a = this.props, className = _a.className, size = _a.size, props = __rest(_a, ["className", "size"]);
        if (props.disabled) {
            props["tabIndex"] = -1;
            props["aria-disabled"] = "true";
        }
        var classes = this.classes("Textarea", (size && "Textarea--" + size), this.props.readOnly && "Textarea--readonly", className);
        if (this.props.readOnly) {
            return React.createElement("div", { className: classes }, props.value || props.defaultValue);
        }
        return React.createElement("textarea", __assign({ className: classes }, props));
    };
    Textarea.displayName = "Textarea";
    Textarea.propTypes = {
        "id": PropTypes.string,
        "value": PropTypes.string,
        "defaultValue": PropTypes.string,
        "placeholder": PropTypes.string,
        "name": PropTypes.string,
        "maxLength": PropTypes.number,
        "disabled": PropTypes.bool,
        "readOnly": PropTypes.bool,
        "onChange": PropTypes.func,
        "onBlur": PropTypes.func,
        "onFocus": PropTypes.func,
        "className": PropTypes.string,
        "size": PropTypes.oneOf(["small", "large"]) //
    };
    return Textarea;
}(NamespaceWrapper));
export default Textarea;

//# sourceMappingURL=Textarea.js.map
