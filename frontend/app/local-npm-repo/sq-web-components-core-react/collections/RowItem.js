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
var RowItem = /** @class */ (function (_super) {
    __extends(RowItem, _super);
    function RowItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowItem.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        var classes = [];
        ["lg", "md", "sm", "xs"].forEach(function (size) {
            function popProp(propSuffix, modifier) {
                var propName = "" + size + propSuffix;
                var propValue = props[propName];
                if (propValue != null) {
                    classes.push("Row__" + size + modifier + "--" + propValue);
                }
                delete props[propName];
            }
            popProp("", "");
            popProp("Offset", "--offset");
            popProp("Push", "--push");
            popProp("Pull", "--pull");
        });
        return React.createElement("div", __assign({}, props, { className: this.classes.apply(this, [className].concat(classes)) }));
    };
    RowItem.displayName = "RowItem";
    RowItem.propTypes = {
        /**
         * The number of columns you wish to span
         * for Extra small devices Phones (<768px)
         */
        xs: PropTypes.number,
        /**
         * The number of columns you wish to span
         * for Small devices Tablets (≥768px)
         */
        sm: PropTypes.number,
        /**
         * The number of columns you wish to span
         * for Medium devices Desktops (≥992px)
         */
        md: PropTypes.number,
        /**
         * The number of columns you wish to span
         * for Large devices Desktops (≥1200px)
         */
        lg: PropTypes.number,
        /**
         * Move columns to the right
         * for Extra small devices Phones
         */
        xsOffset: PropTypes.number,
        /**
         * Move columns to the right
         * for Small devices Tablets
         */
        smOffset: PropTypes.number,
        /**
         * Move columns to the right
         * for Medium devices Desktops
         */
        mdOffset: PropTypes.number,
        /**
         * Move columns to the right
         * for Large devices Desktops
         */
        lgOffset: PropTypes.number,
        /**
         * Change the order of grid columns to the right
         * for Extra small devices Phones
         */
        xsPush: PropTypes.number,
        /**
         * Change the order of grid columns to the right
         * for Small devices Tablets
         */
        smPush: PropTypes.number,
        /**
         * Change the order of grid columns to the right
         * for Medium devices Desktops
         */
        mdPush: PropTypes.number,
        /**
         * Change the order of grid columns to the right
         * for Large devices Desktops
         */
        lgPush: PropTypes.number,
        /**
         * Change the order of grid columns to the left
         * for Extra small devices Phones
         */
        xsPull: PropTypes.number,
        /**
         * Change the order of grid columns to the left
         * for Small devices Tablets
         */
        smPull: PropTypes.number,
        /**
         * Change the order of grid columns to the left
         * for Medium devices Desktops
         */
        mdPull: PropTypes.number,
        /**
         * Change the order of grid columns to the left
         * for Large devices Desktops
         */
        lgPull: PropTypes.number,
    };
    return RowItem;
}(NamespaceWrapper));
export default RowItem;

//# sourceMappingURL=RowItem.js.map
