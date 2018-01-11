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
import * as React from "react";
import { Manager, Popper, Target } from "react-popper";
import Portal from "react-travel";
import ButtonGroup from "./ButtonGroup";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var SplitButton = /** @class */ (function (_super) {
    __extends(SplitButton, _super);
    function SplitButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            if (_this.props.open) {
                return;
            }
            _this.setState({
                open: !_this.state.open
            });
        };
        _this.state = {
            open: props.open || false
        };
        return _this;
    }
    SplitButton.prototype.renderTrigger = function () {
        var _this = this;
        if (typeof this.props.trigger !== "function") {
            return this.props.trigger;
        }
        return function (options) {
            return _this.props.trigger({
                arrowProps: options.arrowProps,
                restProps: options.restProps,
                isOpen: _this.state.open,
                caret: React.createElement("span", { className: _this.classes("Caret") })
            });
        };
    };
    SplitButton.prototype.render = function () {
        return React.createElement(Manager, { component: ButtonGroup, tabIndex: 0 },
            this.props.title,
            React.createElement(Target, { onClick: this.handleClick }, this.renderTrigger()),
            this.state.open && React.createElement(Portal, null,
                React.createElement(Popper, { placement: "bottom-end" }, this.props.children)));
    };
    return SplitButton;
}(NamespaceWrapper));
export default SplitButton;

//# sourceMappingURL=SplitButton.js.map
