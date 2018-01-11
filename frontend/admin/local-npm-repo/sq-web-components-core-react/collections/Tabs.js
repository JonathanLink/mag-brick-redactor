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
import * as React from "react";
import * as PropTypes from "prop-types";
import TabsPanel from "./TabsPanel";
import { getChildren } from "../ReactUtils";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tabActive: props.tabActive
        };
        return _this;
    }
    Tabs.prototype.componentDidMount = function () {
        var index = this.state.tabActive;
        var $selectedPanel = this.refs["tab-panel"];
        var $selectedMenu = this.refs["tab-menu-" + index];
        if (this.props.onMount != null) {
            this.props.onMount(index, $selectedPanel, $selectedMenu);
        }
    };
    Tabs.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.tabActive != null) {
            this.setState({ tabActive: nextProps.tabActive });
        }
    };
    Tabs.prototype.render = function () {
        var className = this.classes("Tabs", (this.props.variant == null ? "" : "Tabs--" + this.props.variant), (this.props.position == null ? "" : "Tabs--" + this.props.position), (this.props.block ? "Tabs--block" : ""), (this.props.className == null ? "" : this.props.className));
        return React.createElement("div", { className: className },
            this.props.position !== "bottom" ? this.renderMenuItems() : null,
            this.renderPanels(),
            this.props.position === "bottom" ? this.renderMenuItems() : null);
    };
    Tabs.prototype.setActive = function (index, e) {
        e.preventDefault();
        e.stopPropagation();
        var onAfterChange = this.props.onAfterChange;
        var onBeforeChange = this.props.onBeforeChange;
        var $selectedPanel = this.refs["tab-panel"];
        var $selectedMenu = this.refs["tab-menu-" + index];
        if (onBeforeChange != null && !onBeforeChange(index, $selectedPanel, $selectedMenu)) {
            return;
        }
        this.setState({ tabActive: index }, function () {
            if (onAfterChange != null) {
                onAfterChange(index, $selectedPanel, $selectedMenu);
            }
        });
    };
    Tabs.prototype.handleKeyDown = function (index, event) {
        var newActive = null;
        if (event.keyCode === 37 || event.keyCode === 38) {
            newActive = this.findPreviousActive();
        }
        else if (event.keyCode === 39 || event.keyCode === 40) {
            newActive = this.findNextActive();
        }
        else if (event.which === 32) {
            newActive = index;
        }
        if (newActive != null) {
            this.setActive(newActive, event);
        }
    };
    Tabs.prototype.findNextActive = function () {
        var currentIndex = this.state.tabActive - 1;
        currentIndex++;
        while (this.props.children[currentIndex] != null) {
            var panel = this.props.children[currentIndex];
            if (!panel.props.disabled && !panel.props.hidden) {
                return currentIndex + 1;
            }
            currentIndex++;
        }
        return null;
    };
    Tabs.prototype.findPreviousActive = function () {
        var currentIndex = this.state.tabActive - 1;
        currentIndex--;
        while ((this.props.children[currentIndex] != null)) {
            var panel = this.props.children[currentIndex];
            if (!panel.props.disabled && !panel.props.hidden) {
                return currentIndex + 1;
            }
            currentIndex--;
        }
        return null;
    };
    Tabs.prototype.renderPanels = function () {
        var _this = this;
        var children = getChildren(this.props.children);
        var that = this;
        var $panelsItems = children.map(function ($panel, arrIndex, strings) {
            var panel = $panel;
            var index = arrIndex + 1;
            var panelClasses = _this.classes("Tabs__panel", (that.state.tabActive === index) ? "is-display" : "", (panel.props.className == null ? "" : panel.props.className));
            return React.createElement("div", { ref: "tab-panel", key: arrIndex, className: panelClasses, role: "tabpanel" }, $panel);
        });
        return $panelsItems;
    };
    Tabs.prototype.renderMenuItems = function () {
        var _this = this;
        if (this.props.children == null) {
            throw new Error("Tabs must contain at least one TabsPanel");
        }
        var children = getChildren(this.props.children);
        var that = this;
        var $menuItems = children.map(function ($panel, arrIndex, strings) {
            var panel = $panel;
            var index = arrIndex + 1;
            var title = panel.props.title;
            var itemClasses = _this.classes("Tabs__item", (that.state.tabActive === index) ? "is-active" : "", (panel.props.disabled ? "is-disabled" : ""), (panel.props.hidden ? "is-hidden" : ""));
            var parameters = {
                "tabIndex": panel.props.disabled || panel.props.hidden ? -1 : 0,
                "aria-selected": that.state.tabActive === index ? "true" : "false",
                "aria-expanded": that.state.tabActive === index ? "true" : "false",
            };
            if (!panel.props.disabled && !panel.props.hidden) {
                parameters.onClick = function (event) { return that.setActive(index, event); };
                parameters.onKeyDown = function (event) { return that.handleKeyDown(index, event); };
            }
            if (panel.props.disabled) {
                parameters["aria-disabled"] = "true";
            }
            if (panel.props.hidden) {
                parameters["aria-hidden"] = "true";
            }
            parameters.children = title;
            return React.createElement("li", __assign({ ref: "tab-menu-" + index, key: arrIndex, className: itemClasses, role: "tab" }, parameters));
        });
        return React.createElement("ul", { className: this.classes("Tabs__list") }, $menuItems);
    };
    Tabs.displayName = "Tabs";
    Tabs.propTypes = {
        className: PropTypes.string,
        position: PropTypes.oneOf(["bottom"]),
        variant: PropTypes.oneOf(["loud"]),
        block: PropTypes.bool,
        tabActive: PropTypes.number,
        onMount: PropTypes.func,
        onBeforeChange: PropTypes.func,
        onAfterChange: PropTypes.func,
        children: PropTypes.node.isRequired
    };
    Tabs.defaultProps = {
        tabActive: 1,
        children: []
    };
    return Tabs;
}(NamespaceWrapper));
export default Tabs;
export { TabsPanel };

//# sourceMappingURL=Tabs.js.map
