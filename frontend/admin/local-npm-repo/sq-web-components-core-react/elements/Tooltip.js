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
import * as PropTypes from "prop-types";
import { Arrow, Manager, Popper, Target } from "react-popper";
import Portal from "react-travel";
import { isIE9OrBelow } from "../utils";
import { getCSSAttrNumeric, getOffset, getScrollTop, setOffset, getComputedStyle } from "../domUtils";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            shouldShow: false,
        };
        return _this;
    }
    Tooltip.prototype.getActionProps = function () {
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
    Tooltip.prototype.getPosition = function (el) {
        var isBody = el.tagName === "BODY";
        var _a = el.getBoundingClientRect(), bottom = _a.bottom, height = _a.height, left = _a.left, right = _a.right, top = _a.top, width = _a.width;
        if (width == null) {
            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
            width = right - left;
            height = bottom - top;
        }
        if (isBody) {
            width = window.innerWidth;
            height = window.innerHeight;
        }
        if (isBody) {
            top = 0;
            left = 0;
        }
        else {
            var offset = getOffset(el);
            top = offset.top;
            left = offset.left;
        }
        return {
            width: width, height: height, top: top, left: left,
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : getScrollTop(el)
        };
    };
    Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return {
            left: pos.left + pos.width / 2 - actualWidth / 2,
            top: placement === "bottom" ? pos.top + pos.height : pos.top - actualHeight
        };
    };
    Tooltip.prototype.placeTooltip = function (tooltipNode, reference) {
        // Only support bottom and top on old IE
        var placement = this.props.placement === "bottom" ? "bottom" : "top";
        tooltipNode.setAttribute("data-placement", placement);
        var pos = this.getPosition(reference);
        var actualWidth = tooltipNode.offsetWidth;
        var actualHeight = tooltipNode.offsetHeight;
        var height = actualHeight;
        var offset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
        var computed = getComputedStyle(tooltipNode);
        offset.top += getCSSAttrNumeric(computed, "marginTop");
        offset.left += getCSSAttrNumeric(computed, "marginLeft");
        setOffset(tooltipNode, offset);
        // check to see if placing tip in new offset caused the tip to resize itself
        actualHeight = tooltipNode.offsetHeight;
        if (placement === "top" && actualHeight !== height) {
            offset.top = offset.top + height - actualHeight;
            setOffset(tooltipNode, offset);
        }
        // place arrow
        var arrow = ReactDOM.findDOMNode(this.refs["arrow"]);
        arrow.style.left = "" + Math.floor(actualWidth / 2 - arrow.offsetWidth / 2);
    };
    Tooltip.prototype.componentDidUpdate = function () {
        if (this.isVisible() && isIE9OrBelow() && this.refs["popper"]) {
            this.placeTooltip(ReactDOM.findDOMNode(this.refs["popper"]), ReactDOM.findDOMNode(this.refs["content"]));
        }
    };
    Tooltip.prototype.componentDidMount = function () {
        if (this.isVisible() && isIE9OrBelow() && this.refs["popper"]) {
            this.placeTooltip(ReactDOM.findDOMNode(this.refs["popper"]), ReactDOM.findDOMNode(this.refs["content"]));
        }
    };
    Tooltip.prototype.renderTooltip = function (className, props, title) {
        var _this = this;
        var PopperComponent = Popper;
        var arrow = React.createElement(Arrow, null, function (_a) {
            var arrowProps = _a.arrowProps;
            return React.createElement("span", __assign({ className: _this.classes("Tooltip__arrow") }, arrowProps));
        });
        if (isIE9OrBelow()) {
            PopperComponent = "div";
            arrow = React.createElement("span", { ref: "arrow", className: this.classes("Tooltip__arrow") });
            // only accept bottom and top in IE
            props.placement = props.placement === "bottom" ? "bottom" : "top";
            props["data-placement"] = props.placement;
            props["ref"] = "popper";
        }
        var content = (React.createElement(PopperComponent, __assign({ role: "tooltip", className: this.classes("Tooltip", className) }, props),
            React.createElement("div", { className: this.classes("Tooltip__inner") }, title),
            arrow));
        return isIE9OrBelow() ? content : React.createElement(Portal, null, content);
    };
    Tooltip.prototype.isVisible = function () {
        return this.props.visible === true || this.state.shouldShow;
    };
    Tooltip.prototype.render = function () {
        var _a = this.props, children = _a.children, visible = _a.visible, title = _a.title, className = _a.className, trigger = _a.trigger, props = __rest(_a, ["children", "visible", "title", "className", "trigger"]);
        var moreProps = {};
        var ManagerComponent = Manager;
        var TargetComponent = Target;
        if (isIE9OrBelow()) {
            ManagerComponent = "span";
            TargetComponent = "span";
            moreProps["ref"] = "content";
        }
        return (React.createElement(ManagerComponent, __assign({ component: "span", style: { display: "inline-block" } }, moreProps),
            React.createElement(TargetComponent, __assign({ component: "span", style: { display: "inline-block" } }, this.getActionProps()), children),
            this.isVisible() && this.renderTooltip(className, props, title)));
    };
    Tooltip.propTypes = {
        placement: PropTypes.oneOf(["bottom", "top", "right", "left"]),
        title: PropTypes.node.isRequired,
        visible: PropTypes.bool,
        className: PropTypes.string,
        trigger: PropTypes.oneOf(["hover", "click"])
    };
    Tooltip.defaultProps = {
        placement: "top",
        className: "tooltip",
        trigger: "hover"
    };
    return Tooltip;
}(NamespaceWrapper));
export default Tooltip;

//# sourceMappingURL=Tooltip.js.map
