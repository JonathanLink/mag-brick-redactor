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
import NamespaceWrapper from "../utils/NamespaceWrapper";
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.renderTableHead = function () {
        var columns = [];
        for (var j in this.props.cols) {
            if (!this.props.cols.hasOwnProperty(j)) {
                continue;
            }
            columns.push(React.createElement("th", null, this.props.cols[j].label));
        }
        return React.createElement("thead", null,
            React.createElement("tr", null, columns));
    };
    Table.prototype.renderTableBody = function () {
        var rows = [];
        for (var i in this.props.data) {
            if (!this.props.data.hasOwnProperty(i)) {
                continue;
            }
            var row = this.props.data[i];
            var columns = [];
            for (var columnIndex in this.props.cols) {
                if (!this.props.cols.hasOwnProperty(columnIndex)) {
                    continue;
                }
                var columnRenderFunction = this.props.cols[columnIndex].renderer;
                var columnKey = this.props.cols[columnIndex].key;
                var cellValue = row[columnKey];
                if (columnRenderFunction != null) {
                    columns.push(React.createElement("td", null, columnRenderFunction(cellValue, i)));
                }
                else {
                    columns.push(React.createElement("td", null, cellValue));
                }
            }
            rows.push(React.createElement("tr", null, columns));
        }
        return React.createElement("tbody", null, rows);
    };
    Table.prototype.render = function () {
        return React.createElement("table", { className: this.classes("Table", this.props.className) },
            this.renderTableHead(),
            this.renderTableBody());
    };
    Table.displayName = "Table";
    return Table;
}(NamespaceWrapper));
export default Table;

//# sourceMappingURL=Table.js.map
