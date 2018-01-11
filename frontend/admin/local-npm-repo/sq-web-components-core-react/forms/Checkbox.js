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
import * as React from "react";
import * as PropTypes from "prop-types";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Checkbox.prototype.render = function () {
        var classes = this.classes("Checkbox", this.props.isSwitch && "Checkbox--switch", this.props.className);
        return React.createElement("label", { className: classes },
            this.renderInput(),
            React.createElement("span", { className: this.classes("Checkbox__label") }, this.props.children));
    };
    Checkbox.prototype.renderInput = function () {
        var options = {};
        if (this.props.name != null) {
            options.name = this.props.name;
        }
        if (this.props.checked != null) {
            options.checked = this.props.checked;
        }
        if (this.props.defaultChecked != null) {
            options.defaultChecked = this.props.defaultChecked;
        }
        return React.createElement("input", __assign({ onChange: this.handleChange, type: "checkbox", value: "1", disabled: !!this.props.disabled }, options));
    };
    Checkbox.prototype.handleChange = function (event) {
        if (this.props.onChange != null) {
            this.props.onChange(event.target.checked, event);
        }
    };
    Checkbox.displayName = "Checkbox";
    Checkbox.propTypes = {
        "name": PropTypes.string,
        "defaultChecked": PropTypes.bool,
        "checked": PropTypes.bool,
        "onChange": PropTypes.func,
        "disabled": PropTypes.bool,
        "className": PropTypes.string,
        "isSwitch": PropTypes.bool //
    };
    return Checkbox;
}(NamespaceWrapper));
export default Checkbox;

//# sourceMappingURL=Checkbox.js.map
