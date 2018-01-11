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
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({ className: this.classes("Card", className) }, props));
    };
    return Card;
}(NamespaceWrapper));
export default Card;
var CardMedia = /** @class */ (function (_super) {
    __extends(CardMedia, _super);
    function CardMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardMedia.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, children = _a.children, props = __rest(_a, ["namespace", "className", "children"]);
        return React.createElement("div", { className: this.classes("Card__media", className) },
            React.createElement("img", __assign({}, props)),
            children && React.createElement("div", { className: this.classes("Card__media__extra", "Card__media__extra--inverse") },
                React.createElement("div", { className: this.classes("Card__media__legend") }, children)));
    };
    return CardMedia;
}(NamespaceWrapper));
export { CardMedia };
var CardItem = /** @class */ (function (_super) {
    __extends(CardItem, _super);
    function CardItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardItem.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("Card__item", className) }));
    };
    return CardItem;
}(NamespaceWrapper));
export { CardItem };
var CardActions = /** @class */ (function (_super) {
    __extends(CardActions, _super);
    function CardActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActions.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("Card__actions", className) }));
    };
    return CardActions;
}(NamespaceWrapper));
export { CardActions };
var CardHeader = /** @class */ (function (_super) {
    __extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, divided = _a.divided, props = __rest(_a, ["namespace", "className", "divided"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("Card__header", divided && "has-divider", className) }));
    };
    return CardHeader;
}(NamespaceWrapper));
export { CardHeader };
var CardFooter = /** @class */ (function (_super) {
    __extends(CardFooter, _super);
    function CardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooter.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, divided = _a.divided, props = __rest(_a, ["namespace", "className", "divided"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("Card__footer", divided && "has-divider", className) }));
    };
    return CardFooter;
}(NamespaceWrapper));
export { CardFooter };
var CardText = /** @class */ (function (_super) {
    __extends(CardText, _super);
    function CardText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardText.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("p", __assign({}, props, { className: this.classes("Card__text", className) }));
    };
    return CardText;
}(NamespaceWrapper));
export { CardText };
var CardMenu = /** @class */ (function (_super) {
    __extends(CardMenu, _super);
    function CardMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardMenu.prototype.render = function () {
        var _a = this.props, namespace = _a.namespace, className = _a.className, props = __rest(_a, ["namespace", "className"]);
        return React.createElement("div", __assign({}, props, { className: this.classes("Card__menu", className) }), "\u22EE");
    };
    return CardMenu;
}(NamespaceWrapper));
export { CardMenu };

//# sourceMappingURL=Card.js.map
