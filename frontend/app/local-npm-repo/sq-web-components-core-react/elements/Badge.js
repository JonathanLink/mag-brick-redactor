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
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var className = this.classes("Badge", (this.props.level && "Badge--" + this.props.level), (this.props.size && "Badge--" + this.props.size), (this.props.pill && "Badge--pill"), this.props.className);
        return React.createElement("span", { className: className }, this.props.children);
    };
    Badge.displayName = "Badge";
    Badge.propTypes = {
        // Modifiers
        "className": PropTypes.string,
        "level": PropTypes.oneOf(["info", "warning", "error", "success"]),
        "size": PropTypes.oneOf(["small", "large"]),
        // States
        "pill": PropTypes.bool,
        // Deprecated
        "color": PropTypes.string,
        "text": PropTypes.string,
        "boldTextPositionFromEnd": PropTypes.number,
        "boldTextLength": PropTypes.number //
    };
    return Badge;
}(NamespaceWrapper));
export default Badge;

//# sourceMappingURL=Badge.js.map
