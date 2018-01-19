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
import * as PropTypes from "prop-types";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var className = this.classes("Divider", this.props.size && "Divider--" + this.props.size, this.props.spacing && "Divider--" + this.props.spacing, this.props.className);
        return React.createElement("hr", { className: className }, this.props.children);
    };
    Divider.displayName = "Divider";
    Divider.propTypes = {
        "className": PropTypes.string,
        "size": PropTypes.oneOf(["large"]),
        "spacing": PropTypes.oneOf(["compact", "spacious"]) //
    };
    return Divider;
}(NamespaceWrapper));
export default Divider;

//# sourceMappingURL=Divider.js.map
