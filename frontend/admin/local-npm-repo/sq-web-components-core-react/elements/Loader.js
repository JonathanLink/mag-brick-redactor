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
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loader.prototype.render = function () {
        var className = this.classes("Loader", this.props.type && "Loader--" + this.props.type, this.props.className);
        return React.createElement("div", { className: className },
            React.createElement("span", { className: this.classes("Loader__indicator") }),
            this.props.children);
    };
    Loader.displayName = "Loader";
    Loader.propTypes = {
        "type": PropTypes.oneOf(["pulse", "circle", "linear", "dot"]),
        "className": PropTypes.string
    };
    Loader.defaultProps = {
        type: "pulse"
    };
    return Loader;
}(NamespaceWrapper));
export default Loader;

//# sourceMappingURL=Loader.js.map
