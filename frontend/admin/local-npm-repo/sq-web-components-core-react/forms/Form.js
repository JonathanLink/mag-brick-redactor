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
import FormAddon from "./FormAddon";
import FormItem from "./FormItem";
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, horizontal = _a.horizontal, props = __rest(_a, ["namespace", "className", "horizontal"]);
        var classes = this.classes("Form", horizontal && "Form--horizontal", className);
        return React.createElement("form", __assign({ className: classes }, props));
    };
    Form.displayName = "Form";
    return Form;
}(NamespaceWrapper));
export default Form;
var FormActions = /** @class */ (function (_super) {
    __extends(FormActions, _super);
    function FormActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormActions.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("Form__actions", className) }));
    };
    return FormActions;
}(NamespaceWrapper));
export { FormActions };
export { FormAddon, FormItem };

//# sourceMappingURL=Form.js.map
