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
import { getChildren } from "../ReactUtils";
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overlay.prototype.renderOverlayContent = function () {
        var children = getChildren(this.props.children);
        if (children.length === 0) {
            return null;
        }
        return React.createElement("div", { className: this.classes("Overlay__content", this.props.contentClassName) }, this.props.children);
    };
    Overlay.prototype.render = function () {
        return React.createElement("div", { className: this.classes("Overlay", this.props.display && "is-active", this.props.className), onClick: this.props.onHide }, this.renderOverlayContent());
    };
    Overlay.displayName = "Overlay";
    Overlay.defaultProps = {
        className: "",
        contentClassName: "",
        display: false
    };
    return Overlay;
}(NamespaceWrapper));
export default Overlay;

//# sourceMappingURL=Overlay.js.map
