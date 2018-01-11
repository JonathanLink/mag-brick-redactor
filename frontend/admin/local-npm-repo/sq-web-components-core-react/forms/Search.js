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
import NamespaceWrapper from "../utils/NamespaceWrapper";
import { default as Input } from "./Input";
import Button from "./Button";
import { IconSearch } from "sq-web-icons";
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: _this.props.value || _this.props.defaultValue
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleClear = _this.handleClear.bind(_this);
        return _this;
    }
    Search.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ value: this.props.value });
        }
    };
    Search.prototype.handleChange = function (event) {
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        this.setState({ value: event.target.value });
    };
    Search.prototype.handleClear = function (event) {
        var _this = this;
        var eventClone = __rest(event, []);
        this.setState({ value: "" }, function () {
            _this.handleChange(eventClone);
        });
    };
    Search.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, onChange = _a.onChange, className = _a.className, children = _a.children, inputProps = __rest(_a, ["onClick", "onChange", "className", "children"]);
        var searchClassName = this.classes("Search", (this.props.size ? "Search--" + this.props.size : ""), (this.props.disabled ? "is-disabled" : ""), (this.props.onClick ? "has-action" : ""), (this.state.value ? "has-text" : ""), (className ? className : ""));
        var buttonConfig = { variant: "text" };
        if (this.props.size) {
            buttonConfig.size = this.props.size;
        }
        if (this.props.disabled) {
            buttonConfig.disabled = this.props.disabled;
        }
        return (React.createElement("form", { className: searchClassName },
            React.createElement("span", { className: this.classes("Search__input") },
                React.createElement(Input, __assign({ type: "search", onChange: this.handleChange }, inputProps))),
            React.createElement("span", { className: this.classes("Search__clear") },
                React.createElement(Button, __assign({ type: "reset", onClick: this.handleClear }, buttonConfig, { children: "×" }))),
            this.props.onClick && (React.createElement("span", { className: this.classes("Search__action") },
                React.createElement(Button, __assign({ onClick: this.props.onClick }, buttonConfig, { children: React.createElement(IconSearch, null) }))))));
    };
    Search.displayName = "Search";
    Search.propTypes = {
        // Field props
        "id": PropTypes.string,
        "value": PropTypes.string,
        "defaultValue": PropTypes.string,
        "placeholder": PropTypes.string,
        "type": PropTypes.string,
        "name": PropTypes.string,
        "maxLength": PropTypes.number,
        "disabled": PropTypes.bool,
        "readOnly": PropTypes.bool,
        "onChange": PropTypes.func,
        "size": PropTypes.oneOf(["small", "large"]),
        // Search props
        "onClick": PropTypes.func,
        "className": PropTypes.string,
    };
    return Search;
}(NamespaceWrapper));
export default Search;

//# sourceMappingURL=Search.js.map
