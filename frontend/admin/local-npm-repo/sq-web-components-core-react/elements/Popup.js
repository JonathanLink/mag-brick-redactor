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
import { Manager, Popper, Target, Arrow } from "react-popper";
import Portal from "react-travel";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            shouldShow: false,
        };
        return _this;
    }
    Popup.prototype.getActionProps = function () {
        var _this = this;
        if (this.props.visible != null) {
            return {};
        }
        if (this.props.trigger === "click") {
            return {
                onClick: function () { return _this.setState({ shouldShow: !_this.state.shouldShow }); }
            };
        }
        return {
            onMouseOver: function () { return _this.setState({ shouldShow: true }); },
            onMouseOut: function () { return _this.setState({ shouldShow: false }); }
        };
    };
    Popup.prototype.render = function () {
        return (React.createElement(Manager, { component: "span", style: { display: "inline-block" } },
            React.createElement(Target, __assign({ component: "span", style: { display: "inline-block" } }, this.getActionProps()), this.props.children),
            this._popper()));
    };
    Popup.prototype._popper = function () {
        var _this = this;
        if (this.props.visible !== true && (!this.state.shouldShow || this.props.visible === false))
            return null;
        var _a = this.props, children = _a.children, visible = _a.visible, trigger = _a.trigger, namespace = _a.namespace, title = _a.title, content = _a.content, className = _a.className, props = __rest(_a, ["children", "visible", "trigger", "namespace", "title", "content", "className"]);
        return (React.createElement(Portal, null,
            React.createElement(Popper, __assign({ component: "div", className: this.classes("Popup", className) }, props),
                title && React.createElement("div", { className: this.classes("Popup__header") }, title),
                React.createElement("div", { className: this.classes("Popup__content") }, content),
                React.createElement(Arrow, null, function (_a) {
                    var arrowProps = _a.arrowProps;
                    return React.createElement("span", __assign({ className: _this.classes("Popup__arrow") }, arrowProps));
                }))));
    };
    Popup.propTypes = {
        placement: PropTypes.string,
        title: PropTypes.node,
        content: PropTypes.node.isRequired,
        visible: PropTypes.bool,
        className: PropTypes.string,
        trigger: PropTypes.oneOf(["hover", "click"])
    };
    Popup.defaultProps = {
        placement: "top",
        className: "tooltip",
        trigger: "click"
    };
    return Popup;
}(NamespaceWrapper));
export default Popup;

//# sourceMappingURL=Popup.js.map
