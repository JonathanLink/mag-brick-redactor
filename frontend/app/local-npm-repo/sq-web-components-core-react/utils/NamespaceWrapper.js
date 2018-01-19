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
var isComponent = /^[A-Z][a-zA-Z0-9]*(__[a-z][a-zA-Z0-9]+)*(--[a-z][a-zA-Z0-9]+)*$/;
var NamespaceWrapper = /** @class */ (function (_super) {
    __extends(NamespaceWrapper, _super);
    function NamespaceWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NamespaceWrapper.prototype.getNamespace = function () {
        return this.props.namespace || this.context.namespace;
    };
    NamespaceWrapper.prototype.classes = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var raw = args.filter(function (item) { return item; });
        var prefix = this.getNamespace();
        var namespaced = prefix ? raw
            .filter(function (item) { return item.match(isComponent); })
            .map(function (item) { return prefix + "-" + item; }) : [];
        return raw.concat(namespaced).join(" ");
    };
    NamespaceWrapper.contextTypes = {
        namespace: PropTypes.string
    };
    return NamespaceWrapper;
}(React.Component));
export default NamespaceWrapper;
;

//# sourceMappingURL=NamespaceWrapper.js.map
