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
import * as ReactDOM from "react-dom";
/**
 * @todo Convert to SVG once IE8 is officially out
 */
var RadialProgress = /** @class */ (function (_super) {
    __extends(RadialProgress, _super);
    function RadialProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadialProgress.prototype.componentDidMount = function () {
        this.update();
    };
    RadialProgress.prototype.componentDidUpdate = function (prevProps, prevState, prevContext) {
        this.update();
    };
    RadialProgress.prototype.update = function () {
        var radius = (this.props.size / 2 | 0);
        var canvas = ReactDOM.findDOMNode(this.refs["canvas"]);
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.renderBackground(context, radius);
        this.renderBar(context, radius);
        if (this.props.withText) {
            this.renderText(context, radius);
        }
    };
    RadialProgress.prototype.renderBackground = function (context, radius) {
        context.fillStyle = this.props.backgroundColor;
        context.beginPath();
        context.arc(radius, radius, radius, 0, Math.PI * 2, false);
        context.arc(radius, radius, radius - this.props.thickness, Math.PI * 2, 0, true);
        context.fill();
    };
    RadialProgress.prototype.renderBar = function (context, radius) {
        context.fillStyle = this.props.barColor;
        var startAngle = Math.PI * 1.5;
        var degrees = this.props.percent * 3.6;
        var radians = degrees * (Math.PI / 180);
        context.beginPath();
        context.arc(radius, radius, radius, startAngle, startAngle + radians, false);
        context.arc(radius, radius, radius - this.props.thickness, startAngle + radians, startAngle, true);
        context.fill();
    };
    RadialProgress.prototype.renderText = function (context, radius) {
        context.fillStyle = this.props.textColor == null ? this.props.barColor : this.props.textColor;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "bold " + ((radius / 2 | 0)) + "px Arial";
        context.fillText(Math.round(this.props.percent) + "%", radius, radius, 200);
    };
    RadialProgress.prototype.render = function () {
        return React.createElement("canvas", { width: this.props.size, height: this.props.size, ref: "canvas" });
    };
    RadialProgress.displayName = "RadialProgress";
    RadialProgress.propTypes = {
        size: PropTypes.number.isRequired,
        backgroundColor: PropTypes.string,
        barColor: PropTypes.string.isRequired,
        thickness: PropTypes.number,
        percent: PropTypes.number.isRequired,
        withText: PropTypes.bool,
        textColor: PropTypes.string
    };
    RadialProgress.defaultProps = {
        size: 0,
        barColor: "",
        percent: 0,
        thickness: 10,
        withText: false,
        backgroundColor: "#ccc"
    };
    return RadialProgress;
}(React.Component));
export default RadialProgress;

//# sourceMappingURL=RadialProgress.js.map
