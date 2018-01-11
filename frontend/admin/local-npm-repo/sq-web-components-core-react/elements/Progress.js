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
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var classes = this.classes("Progress", (this.props.level != null ? "Progress--" + this.props.level : ""), this.props.className);
        var progressStyle = { width: this.props.percent + "%" };
        return React.createElement("div", null,
            React.createElement("div", { className: classes },
                React.createElement("span", { className: this.classes("Progress__value"), style: progressStyle }, this.props.percent + "%")),
            React.createElement("div", { className: this.classes("Progress__text") }, this.props.children));
    };
    Progress.displayName = "Progress";
    return Progress;
}(NamespaceWrapper));
export default Progress;

//# sourceMappingURL=Progress.js.map
