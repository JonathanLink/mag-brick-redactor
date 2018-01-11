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
import NamespaceWrapper from "../utils/NamespaceWrapper";
import { IconClose } from "sq-web-icons";
import Portal from "react-travel";
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClose = function () {
            _this.props.onClose();
        };
        return _this;
    }
    Dialog.prototype.renderChildren = function (children) {
        if (typeof children === "function") {
            return children(React.createElement("span", { className: this.classes("Dialog__close"), onClick: this.handleClose },
                React.createElement(IconClose, null)));
        }
        return children;
    };
    Dialog.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, backdrop = _a.backdrop, open = _a.open, children = _a.children, onClose = _a.onClose, props = __rest(_a, ["namespace", "className", "backdrop", "open", "children", "onClose"]);
        var classes = this.classes("Dialog", "is-open", (backdrop && "has-backdrop"), className);
        return open ? React.createElement(Portal, null,
            React.createElement("div", __assign({ className: classes, "aria-hidden": "false", role: "dialog" }, props),
                React.createElement("div", { className: this.classes("Dialog__container"), role: "document" }, this.renderChildren(children)))) : React.createElement("span", null);
    };
    return Dialog;
}(NamespaceWrapper));
export default Dialog;
var DialogHeader = /** @class */ (function (_super) {
    __extends(DialogHeader, _super);
    function DialogHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogHeader.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({ className: this.classes("Dialog__header", className) }, props));
    };
    return DialogHeader;
}(NamespaceWrapper));
export { DialogHeader };
var DialogFooter = /** @class */ (function (_super) {
    __extends(DialogFooter, _super);
    function DialogFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogFooter.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({ className: this.classes("Dialog__footer", className) }, props));
    };
    return DialogFooter;
}(NamespaceWrapper));
export { DialogFooter };
var DialogContent = /** @class */ (function (_super) {
    __extends(DialogContent, _super);
    function DialogContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogContent.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({ className: this.classes("Dialog__content", className) }, props));
    };
    return DialogContent;
}(NamespaceWrapper));
export { DialogContent };

//# sourceMappingURL=Dialog.js.map
