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
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collapsed: _this.isCollapsed(props)
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Panel.prototype.isCollapsed = function (panelProps) {
        return panelProps.collapsed;
    };
    Panel.prototype.componentWillReceiveProps = function (panelProps) {
        if (this.isCollapsed(panelProps) !== this.isCollapsed(this.props)) {
            this.setState({ collapsed: this.isCollapsed(panelProps) });
        }
    };
    Panel.prototype.handleClick = function (e) {
        if (!this.props.active) {
            return;
        }
        this.setState({ collapsed: !this.state.collapsed });
    };
    Panel.prototype.render = function () {
        var className = this.classes("Panel", this.props.level && "Panel--" + this.props.level, this.props.size && "Badge--" + this.props.size, this.state.collapsed && "is-collapsed", this.props.className);
        var titleClassName = this.classes("Panel__title", this.props.titleClassName);
        var contentClassName = this.classes("Panel__content", this.props.contentClassName);
        return React.createElement("div", { className: className },
            React.createElement("div", { className: titleClassName, onClick: this.handleClick }, this.props.title),
            React.createElement("div", { className: contentClassName }, this.props.children));
    };
    Panel.displayName = "Panel";
    Panel.propTypes = {
        "title": PropTypes.node,
        // Modifiers
        "className": PropTypes.string,
        "titleClassName": PropTypes.string,
        "contentClassName": PropTypes.string,
        "level": PropTypes.oneOf(["info", "warning", "error", "success"]),
        "size": PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
        // States
        "active": PropTypes.bool,
        "collapsed": PropTypes.bool //
    };
    Panel.defaultProps = {
        active: true,
        collapsed: false
    };
    return Panel;
}(NamespaceWrapper));
export default Panel;

//# sourceMappingURL=Panel.js.map
