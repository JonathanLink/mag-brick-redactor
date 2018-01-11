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
var ESC_KEY_CODE = 27;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePlaceholderClick = function () {
            _this.wrappedInput.focus();
        };
        _this.handleFocus = function (event) {
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
            _this.setPlaceholderActive(false);
        };
        _this.handleBlur = function (event) {
            _this.setPlaceholderActive(!_this.wrappedInput.value);
            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };
        // prevent IE from wiping data out from input and form
        _this.handleKeyDown = function (event) {
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(event);
            }
            if (event.keyCode === ESC_KEY_CODE) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        _this.state = {
            placeholderActive: false
        };
        _this.placeholderSupport = ("placeholder" in document.createElement("input"));
        _this.needsManualPlaceholding = _this.props.placeholder && !_this.placeholderSupport;
        return _this;
    }
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, size = _a.size, props = __rest(_a, ["className", "size"]);
        var classes = this.classes("Input", (size && "Input--" + size), className);
        if (props.readOnly || props.disabled) {
            props["tabIndex"] = -1;
        }
        if (props.disabled) {
            props["aria-disabled"] = "true";
        }
        return (React.createElement("div", { className: "u-posRelative" },
            this.renderPlaceholder(),
            React.createElement("input", __assign({ className: classes }, props, { onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, ref: function (input) { _this.wrappedInput = input; } }))));
    };
    Input.prototype.componentWillReceiveProps = function (nextProps) {
        this.needsManualPlaceholding = !this.placeholderSupport && !!nextProps.placeholder;
    };
    Input.prototype.componentDidMount = function () {
        var _this = this;
        if (this.needsManualPlaceholding) {
            setTimeout(function () { return _this.setPlaceholderActive(_this.wrappedInput && !_this.wrappedInput.value); }, 0);
        }
    };
    Input.prototype.renderPlaceholder = function () {
        if (this.needsManualPlaceholding && this.state.placeholderActive) {
            return React.createElement("div", { className: this.classes("Input__placeholder"), onClick: this.handlePlaceholderClick }, this.props.placeholder);
        }
        return null;
    };
    Input.prototype.setPlaceholderActive = function (active) {
        if (this.needsManualPlaceholding) {
            this.setState({
                placeholderActive: active
            });
        }
    };
    Input.displayName = "Input";
    Input.propTypes = {
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
        "onFocus": PropTypes.func,
        "onBlur": PropTypes.func,
        "onKeyDown": PropTypes.func,
        "className": PropTypes.string,
        "size": PropTypes.oneOf(["small", "large"]) //
    };
    return Input;
}(NamespaceWrapper));
export default Input;

//# sourceMappingURL=Input.js.map
