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
import NamespaceWrapper from "../utils/NamespaceWrapper";
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = function (e) {
            if (_this.ignoreEvents()) {
                return;
            }
            var el = ReactDOM.findDOMNode(_this.refs["container"]);
            if (!el.contains(e.target)) {
                _this.setState({ open: false });
            }
        };
        _this.handleEnter = function () {
            if (_this.ignoreEvents()) {
                return;
            }
            if (_this.leaveTimeout) {
                clearTimeout(_this.leaveTimeout);
            }
            _this.setState({
                open: true
            });
        };
        _this.handleLeave = function () {
            if (_this.ignoreEvents()) {
                return;
            }
            // As there is a space between elements
            // we don't want to close the menu instantly
            _this.leaveTimeout = setTimeout(function () {
                _this.setState({
                    open: false
                });
            }, 200);
        };
        _this.handleClick = function (e) {
            if (_this.ignoreEvents()) {
                return;
            }
            //Ignore if it comes from an inner menu
            var el = ReactDOM.findDOMNode(_this.refs["container"]);
            for (var i = 0; i < el.children.length; i++) {
                if (el.children[i].className.match(/(^| )Menu( |$)/) && el.children[i].contains(e.target)) {
                    return;
                }
            }
            _this.setState(function (state) { return ({
                open: !state.open
            }); });
            e.stopPropagation();
        };
        _this.state = {
            open: props.open || false
        };
        return _this;
    }
    MenuItem.prototype.componentDidMount = function () {
        document.addEventListener("click", this.handleClickOutside, true);
    };
    MenuItem.prototype.componentWillUnmount = function () {
        document.removeEventListener("click", this.handleClickOutside, true);
    };
    MenuItem.prototype.ignoreEvents = function () {
        return this.props.open || this.props.disabled || !this.props.submenu;
    };
    MenuItem.prototype.getEvents = function () {
        if (this.props.hoverable) {
            return {
                onMouseEnter: this.handleEnter,
                onMouseLeave: this.handleLeave
            };
        }
        return {
            onClick: this.handleClick
        };
    };
    MenuItem.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, submenu = _a.submenu, children = _a.children, hoverable = _a.hoverable, open = _a.open, disabled = _a.disabled, props = __rest(_a, ["namespace", "className", "submenu", "children", "hoverable", "open", "disabled"]);
        var classes = this.classes("Menu__item", (submenu ? "has-submenu " : ""), this.state.open && "is-open", className);
        return (React.createElement("li", __assign({ ref: "container" }, props, this.getEvents(), { className: classes }),
            children,
            submenu && React.createElement("span", { className: this.classes("Caret") })));
    };
    return MenuItem;
}(NamespaceWrapper));
export default MenuItem;

//# sourceMappingURL=MenuItem.js.map
