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
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var className = this.classes("ButtonGroup", this.props.vertical && "ButtonGroup--vertical", this.props.block && "ButtonGroup--block", this.props.className);
        return React.createElement("div", { className: className }, this.props.children);
    };
    ButtonGroup.displayName = "ButtonGroup";
    ButtonGroup.propTypes = {
        className: PropTypes.string,
        vertical: PropTypes.bool,
        block: PropTypes.bool,
        children: PropTypes.node.isRequired
    };
    return ButtonGroup;
}(NamespaceWrapper));
export default ButtonGroup;

//# sourceMappingURL=ButtonGroup.js.map
