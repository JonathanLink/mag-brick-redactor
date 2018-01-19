export function getComputedStyle(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
        view = window;
    }
    return view.getComputedStyle(elem);
}
export function getCSSAttr(computed, attr) {
    return computed.getPropertyValue(attr) || computed[attr];
}
export function getCSSAttrNumeric(computed, attr) {
    var val = getCSSAttr(computed, attr);
    var value = parseInt(val, 10);
    // we must check for NaN for ie 8/9
    return isNaN(value) ? 0 : value;
}
export function getOffset(elem) {
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    var rect = elem.getBoundingClientRect();
    var win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
export function getScrollTop(elem) {
    var win;
    if (elem && elem === elem.window) {
        win = elem;
    }
    else if (elem.nodeType === 9) {
        win = elem.defaultView;
    }
    return win ? win.pageYOffset : elem.scrollTop;
}
export function getElementPosition(elem, computed) {
    var offsetParent, offset, doc, parentOffset = { top: 0, left: 0 };
    // position:fixed elements are offset from the viewport, which itself always has zero offset
    if (getCSSAttr(computed, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
    }
    else {
        offset = getOffset(elem);
        // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified
        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;
        while (offsetParent &&
            (offsetParent === doc.body || offsetParent === doc.documentElement) &&
            getCSSAttr(this.getComputedStyle(offsetParent), "position") === "static") {
            offsetParent = offsetParent.parentNode;
        }
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
            var computedOffsetParent = this.getComputedStyle(offsetParent);
            // Incorporate borders into its offset, since they are outside its content origin
            parentOffset = getOffset(offsetParent);
            parentOffset.top += getCSSAttrNumeric(computedOffsetParent, "borderTopWidth");
            parentOffset.left += getCSSAttrNumeric(computedOffsetParent, "borderLeftWidth");
        }
    }
    // Subtract parent offsets and element margins
    return {
        top: offset.top - parentOffset.top - getCSSAttrNumeric(computed, "marginTop"),
        left: offset.left - parentOffset.left - getCSSAttrNumeric(computed, "marginLeft")
    };
}
export function setOffset(elem, options) {
    var computed = getComputedStyle(elem);
    var position = getCSSAttr(computed, "position");
    var props = { top: 0, left: 0 };
    // Set position first, in-case top/left are set even on static elem
    if (position === "static") {
        elem.style.position = "relative";
    }
    var curOffset = getOffset(elem);
    var curCSSTop = getCSSAttr(computed, "top");
    var curCSSLeft = getCSSAttr(computed, "left");
    var calculatePosition = (position === "absolute" || position === "fixed") &&
        (curCSSTop + curCSSLeft).indexOf("auto") > -1;
    // Need to be able to calculate position if either
    // top or left is auto and position is either absolute or fixed
    var curPosition, curLeft, curTop;
    if (calculatePosition) {
        curPosition = getElementPosition(elem, computed);
        curTop = curPosition.top;
        curLeft = curPosition.left;
    }
    else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
    }
    //eslint-disable-next-line eqeqeq
    if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
    }
    //eslint-disable-next-line eqeqeq
    if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
    }
    elem.style.posLeft = Math.round(props.left);
    elem.style.posTop = Math.round(props.top);
}

//# sourceMappingURL=domUtils.js.map
