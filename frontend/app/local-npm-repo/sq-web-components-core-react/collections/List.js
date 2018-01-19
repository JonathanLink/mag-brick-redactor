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
import * as PropTypes from "prop-types";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, divided = _a.divided, size = _a.size, horizontal = _a.horizontal, className = _a.className, props = __rest(_a, ["namespace", "divided", "size", "horizontal", "className"]);
        var classes = this.classes("List", divided && "has-divider", size && "List--" + size, horizontal && "List--horizontal", className);
        return React.createElement("ul", __assign({ className: classes }, props));
    };
    List.propTypes = {
        className: PropTypes.string,
        size: PropTypes.string,
        // variant: PropTypes.string, //FIXME: gives a validation error in TypeScript for whatever reason
        divided: PropTypes.bool,
        children: PropTypes.node.isRequired
    };
    return List;
}(NamespaceWrapper));
export default List;
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, divided = _a.divided, hasSublist = _a.hasSublist, className = _a.className, props = __rest(_a, ["namespace", "divided", "hasSublist", "className"]);
        var classes = this.classes("List__item", divided && "has-divider", hasSublist && "has-sublist", className);
        return React.createElement("li", __assign({ className: classes }, props));
    };
    ListItem.propTypes = {
        className: PropTypes.string,
        divided: PropTypes.bool,
        hasSublist: PropTypes.bool
    };
    return ListItem;
}(NamespaceWrapper));
export { ListItem };

//# sourceMappingURL=List.js.map
