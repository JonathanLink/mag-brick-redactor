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
var Metadata = /** @class */ (function (_super) {
    __extends(Metadata, _super);
    function Metadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Metadata.prototype.render = function () {
        var className = this.classes("Metadata", this.props.size && "Metadata--" + this.props.size, this.props.level && "Metadata--" + this.props.level, this.props.position && "Metadata--" + this.props.position, this.props.className);
        return React.createElement("div", { className: className },
            React.createElement("div", { className: this.classes("Metadata__value") }, this.props.children),
            React.createElement("div", { className: this.classes("Metadata__label") }, this.props.label));
    };
    Metadata.displayName = "Metadata";
    Metadata.propTypes = {
        "label": PropTypes.node,
        "className": PropTypes.string,
        "level": PropTypes.oneOf(["info", "warning", "error", "success"]),
        "size": PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
        "position": PropTypes.oneOf(["left", "center", "right"]) //
    };
    return Metadata;
}(NamespaceWrapper));
export default Metadata;

//# sourceMappingURL=Metadata.js.map
