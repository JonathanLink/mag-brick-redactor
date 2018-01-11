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
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.buildOptionsList = function () {
        var optionsList = [];
        for (var key in this.props.options) {
            if (!this.props.options.hasOwnProperty(key)) {
                continue;
            }
            var label = this.props.options[key];
            var selected = this.props.selectedOptionValue === key;
            optionsList.push(React.createElement("option", { className: this.classes("Select__option"), value: key, key: key, selected: selected }, label));
        }
        return optionsList;
    };
    Select.prototype.buildSelectProperties = function () {
        var properties = {};
        if (this.props.onChange) {
            properties.onChange = this.props.onChange;
        }
        if (this.props.name != null) {
            properties.name = this.props.name;
        }
        if (this.props.selectedOptionValue != null) {
            properties.value = this.props.selectedOptionValue;
        }
        if (this.props.loading || this.props.disabled) {
            properties.tabIndex = -1;
        }
        if (this.props.disabled) {
            properties["aria-disabled"] = "true";
            properties.disabled = this.props.disabled;
        }
        properties.children = this.buildOptionsList();
        return properties;
    };
    Select.prototype.render = function () {
        var className = this.classes("Select", (this.props.size == null ? "" : "Select--" + this.props.size), (this.props.level == null ? "" : "Select--" + this.props.level), (this.props.active ? "is-active" : ""), (this.props.loading ? "is-loading" : ""), (this.props.disabled ? "is-disabled" : ""), (this.props.className == null ? "" : this.props.className));
        return React.createElement("div", { className: className },
            React.createElement("select", __assign({}, this.buildSelectProperties())));
    };
    Select.displayName = "Select";
    Select.propTypes = {
        "options": PropTypes.object,
        "selectedOptionValue": PropTypes.string,
        "disabled": PropTypes.bool,
        "active": PropTypes.bool,
        "loading": PropTypes.bool,
        "onChange": PropTypes.func,
        "className": PropTypes.string,
        "level": PropTypes.oneOf(["info", "warning", "error", "success"]),
        "size": PropTypes.oneOf(["small", "large"])
    };
    return Select;
}(NamespaceWrapper));
export default Select;

//# sourceMappingURL=Select.js.map
