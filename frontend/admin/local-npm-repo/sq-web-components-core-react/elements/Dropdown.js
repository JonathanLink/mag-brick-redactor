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
import * as ReactDOM from "react-dom";
import { Manager, Popper, Target } from "react-popper";
import Portal from "react-travel";
import NamespaceWrapper from "../utils/NamespaceWrapper";
import { isIE9OrBelow, isRTL } from "../utils";
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            if (_this.props.open) {
                return;
            }
            _this.setState({
                open: !_this.state.open
            });
            event.preventDefault();
        };
        _this.state = {
            open: !!props.open || false
        };
        return _this;
    }
    Dropdown.prototype.renderTrigger = function () {
        if (typeof this.props.trigger === "function") {
            return this.props.trigger(this.state.open, React.createElement("span", { className: this.classes("Caret") }));
        }
        return this.props.trigger;
    };
    Dropdown.prototype.getPlacement = function (up) {
        if (this.refs["manager"] && isRTL(ReactDOM.findDOMNode(this.refs["manager"]))) {
            return up ? "top-end" : "bottom-end";
        }
        else {
            return up ? "top-start" : "bottom-start";
        }
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, disabled = _a.disabled, open = _a.open, size = _a.size, up = _a.up, children = _a.children, className = _a.className, block = _a.block, props = __rest(_a, ["namespace", "disabled", "open", "size", "up", "children", "className", "block"]);
        var classes = this.classes("Dropdown", (disabled && "is-disabled"), (this.state.open && "is-open"), (size && "Dropdown--" + size), (up && "Dropdown--dropup"), (block && "Dropdown--block"), (isIE9OrBelow() && "Dropdown--legacy"), className);
        var ManagerComponent = isIE9OrBelow() ? "div" : Manager;
        var TargetComponent = isIE9OrBelow() ? "button" : Target;
        // TODO :: report "block" and "size" to the child popper automatically
        return React.createElement(ManagerComponent, __assign({ className: classes, tabIndex: 0, ref: "manager" }, props),
            React.createElement(TargetComponent, { className: this.classes("Dropdown__trigger"), onClick: this.handleClick }, this.renderTrigger()),
            this.renderPopper(children, up));
    };
    Dropdown.prototype.renderPopper = function (children, up) {
        if (!this.state.open) {
            return;
        }
        if (isIE9OrBelow()) {
            return React.createElement("div", { className: this.classes("Dropdown__popper") }, children);
        }
        return React.createElement(Portal, null,
            React.createElement(Popper, { placement: this.getPlacement(up) }, children));
    };
    return Dropdown;
}(NamespaceWrapper));
export default Dropdown;

//# sourceMappingURL=Dropdown.js.map
