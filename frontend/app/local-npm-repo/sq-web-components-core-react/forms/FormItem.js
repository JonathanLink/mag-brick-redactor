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
import NamespaceWrapper from "../utils/NamespaceWrapper";
var FormItem = /** @class */ (function (_super) {
    __extends(FormItem, _super);
    function FormItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormItem.prototype.render = function () {
        var hasError = this.props.hasError || this.props.errorMessage;
        var className = this.classes("Form__item", this.props.className, this.props.required && "is-required", hasError && "has-error");
        var controlClassName = this.classes("Form__item__control", this.props.controlClassName, this.props.addons && "has-addon", this.props.icons && "has-icon");
        return React.createElement("div", { className: className },
            React.createElement("div", { className: this.classes("Form__item__container") },
                React.createElement("label", { className: this.classes("Form__item__label"), htmlFor: this.props.htmlFor }, this.props.label),
                React.createElement("div", { className: controlClassName }, this.props.children)),
            this.props.errorMessage && (React.createElement("div", { className: this.classes("Form__item__message") }, this.props.errorMessage)));
    };
    FormItem.displayName = "FormItem";
    return FormItem;
}(NamespaceWrapper));
export default FormItem;

//# sourceMappingURL=FormItem.js.map
