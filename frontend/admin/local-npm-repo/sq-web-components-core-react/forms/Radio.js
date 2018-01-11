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
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            // Call it on the RadioGroup
            if (_this.context.radioGroup && typeof _this.context.radioGroup.onChange === "function") {
                _this.context.radioGroup.onChange(_this.props.value, e);
            }
            // Call it on the component itself
            if (typeof _this.props.onChange === "function") {
                _this.props.onChange(e.checked, e);
            }
        };
        return _this;
    }
    Radio.prototype.renderInput = function () {
        var options = {};
        // The name on the Radio takes
        // precedence on the name on the RadioGroup
        if (this.props.name != null) {
            options.name = this.props.name;
        }
        else if (this.context.radioGroup && this.context.radioGroup.name !== undefined) {
            options.name = this.context.radioGroup.name;
        }
        // The checked state on the Radio takes
        // precedence on the one of the RadioGroup
        if (this.props.checked != null) {
            options.checked = this.props.checked;
        }
        else if (this.context.radioGroup && this.context.radioGroup.selectedValue !== undefined) {
            options.checked = (this.props.value === this.context.radioGroup.selectedValue);
        }
        if (this.props.defaultChecked != null) {
            options.defaultChecked = this.props.defaultChecked;
        }
        return React.createElement("input", __assign({ onChange: this.handleChange, type: "radio", value: this.props.value, disabled: !!this.props.disabled }, options));
    };
    Radio.prototype.render = function () {
        var classes = this.classes("Radio", this.props.className == null ? "" : this.props.className);
        return React.createElement("label", { className: classes },
            this.renderInput(),
            React.createElement("span", { className: this.classes("Radio__label") }, this.props.children));
    };
    Radio.displayName = "Radio";
    Radio.propTypes = {
        "value": PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        "disabled": PropTypes.bool,
        "className": PropTypes.string,
        // Only for standalone
        "name": PropTypes.string,
        "defaultChecked": PropTypes.bool,
        "checked": PropTypes.bool,
        "onChange": PropTypes.func //
    };
    Radio.contextTypes = {
        namespace: PropTypes.string,
        radioGroup: PropTypes.object
    };
    return Radio;
}(NamespaceWrapper));
export default Radio;

//# sourceMappingURL=Radio.js.map
