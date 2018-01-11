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
var NamespaceProvider = /** @class */ (function (_super) {
    __extends(NamespaceProvider, _super);
    function NamespaceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NamespaceProvider.prototype.getChildContext = function () {
        var namespace = this.props.namespace;
        return { namespace: namespace };
    };
    NamespaceProvider.prototype.render = function () {
        // `Children.only` enables us not to add a <div /> for nothing
        return React.Children.only(this.props.children);
    };
    NamespaceProvider.propTypes = {
        namespace: PropTypes.object.isRequired,
    };
    // you must specify what you’re adding to the context
    NamespaceProvider.childContextTypes = {
        namespace: PropTypes.object.isRequired,
    };
    return NamespaceProvider;
}(React.Component));
export default NamespaceProvider;

//# sourceMappingURL=NamespaceProvider.js.map
