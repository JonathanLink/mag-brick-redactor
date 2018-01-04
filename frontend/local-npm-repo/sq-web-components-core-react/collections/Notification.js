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
import { IconClose, IconError_outline, IconInfo_outline, IconSuccess_outline, IconWarning_outline } from "sq-web-icons";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notification.prototype.getIcon = function () {
        switch (this.props.level) {
            case "info":
                return React.createElement(IconInfo_outline, null);
            case "error":
                return React.createElement(IconError_outline, null);
            case "success":
                return React.createElement(IconSuccess_outline, null);
            case "warning":
                return React.createElement(IconWarning_outline, null);
        }
        return React.createElement(IconInfo_outline, null);
    };
    Notification.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, level = _a.level, onClose = _a.onClose, children = _a.children, props = __rest(_a, ["namespace", "className", "level", "onClose", "children"]);
        return React.createElement("div", __assign({ className: this.classes("Notification", "Notification--" + level, className) }, props),
            React.createElement("div", { className: this.classes("Notification__container") },
                React.createElement("div", { className: this.classes("Notification__icon") }, this.getIcon()),
                React.createElement("div", { className: this.classes("Notification__content") },
                    onClose == null ? null : React.createElement("button", { className: this.classes("Notification__close"), onClick: onClose },
                        React.createElement(IconClose, null)),
                    children)));
    };
    Notification.displayName = "Alert";
    Notification.propTypes = {
        "level": PropTypes.oneOf(["info", "warning", "error", "success"]).isRequired,
        "className": PropTypes.string,
        "onClose": PropTypes.func
    };
    return Notification;
}(NamespaceWrapper));
export default Notification;
var NotificationActions = /** @class */ (function (_super) {
    __extends(NotificationActions, _super);
    function NotificationActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationActions.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({ className: this.classes("Notification__actions", className) }, props));
    };
    return NotificationActions;
}(NamespaceWrapper));
export { NotificationActions };

//# sourceMappingURL=Notification.js.map
