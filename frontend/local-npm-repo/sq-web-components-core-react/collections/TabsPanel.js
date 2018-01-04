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
var TabsPanel = /** @class */ (function (_super) {
    __extends(TabsPanel, _super);
    function TabsPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsPanel.prototype.render = function () {
        return React.createElement("div", null, this.props.children);
    };
    TabsPanel.displayName = "TabsPanel";
    TabsPanel.propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        hidden: PropTypes.bool
    };
    return TabsPanel;
}(React.Component));
export default TabsPanel;

//# sourceMappingURL=TabsPanel.js.map
