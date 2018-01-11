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
import Checkbox from "./Checkbox";
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        return React.createElement(Checkbox, __assign({ isSwitch: true }, this.props));
    };
    Switch.displayName = "Switch";
    Switch.propTypes = {
        "name": PropTypes.string,
        "defaultChecked": PropTypes.bool,
        "checked": PropTypes.bool,
        "onChange": PropTypes.func,
        "disabled": PropTypes.bool,
        "className": PropTypes.string //
    };
    return Switch;
}(React.Component));
export default Switch;

//# sourceMappingURL=Switch.js.map
