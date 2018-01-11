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
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioGroup.prototype.getChildContext = function () {
        return {
            radioGroup: {
                name: this.props.name,
                selectedValue: this.props.selectedValue,
                onChange: this.props.onChange
            }
        };
    };
    RadioGroup.prototype.render = function () {
        var _a = this.props, Component = _a.Component, name = _a.name, selectedValue = _a.selectedValue, onChange = _a.onChange, rest = __rest(_a, ["Component", "name", "selectedValue", "onChange"]);
        return React.createElement(Component, __assign({}, rest));
    };
    RadioGroup.displayName = "RadioGroup";
    RadioGroup.defaultProps = {
        Component: "div"
    };
    RadioGroup.childContextTypes = {
        radioGroup: PropTypes.object
    };
    RadioGroup.propTypes = {
        name: PropTypes.string,
        selectedValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        onChange: PropTypes.func,
        children: PropTypes.node.isRequired,
        Component: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.object,
        ])
    };
    return RadioGroup;
}(React.Component));
export default RadioGroup;

//# sourceMappingURL=RadioGroup.js.map
