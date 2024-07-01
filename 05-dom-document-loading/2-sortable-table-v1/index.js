export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = data;
    this.element = this.createElement(this.createTemplate());
  }

  createElement(template) {
    const element = document.createElement("div");
    element.innerHTML = template;
    return element.firstElementChild;
  }

  createTemplate() {
    // var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");

    var headerRow = document.createElement("tr");
    headerRow.className = "sortable-table__header sortable-table__cell";

    for (var k = 0; k < this.headerConfig.length; k++) {
      var headerT = document.createElement("th");
      var headerText = document.createTextNode(this.headerConfig[k].id);
      headerT.appendChild(headerText);
      headerT.className = "sortable-table__cell";
      headerRow.appendChild(headerT);
    }
    tbl.appendChild(headerRow);

    var tblBody = document.createElement("tbody");
    for (var j = 0; j < this.data.length; j++) {
      var row = document.createElement("tr");
      row.className = "sortable-table__row";
      var cell;

      row.appendChild(this.createRowImages(this.data[j]));
      row.appendChild(this.createRowTitle(this.data[j]));
      row.appendChild(this.createRowQuantity(this.data[j]));
      row.appendChild(this.createRowPrice(this.data[j]));
      row.appendChild(this.createRowSales(this.data[j]));

      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    tblBody.className = "sortable-table ";
    document.body.appendChild(tbl);
    tbl.className = "sortable-table";
  }

  createRowImages(data) {
    let img = new Image();
    img.src = data.images[0].url;
    img.className = "sortable-table__cell-img";
    var cell = document.createElement("td");
    cell.appendChild(img);
    cell.className = "sortable-table__cell ";
    return cell;
  }

  createRowText(data, headerRow = "aaa") {
    console.log(headerRow);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(data[headerRow]);

    cell.appendChild(cellText);
    cell.className = "sortable-table__cell ";
    return cell;
  }

  createRowTitle(data) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(data.title);
    cell.appendChild(cellText);
    cell.className = "sortable-table__cell ";
    return cell;
  }

  createRowQuantity(data) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(data.quantity);
    cell.appendChild(cellText);
    cell.className = "sortable-table__cell ";
    return cell;
  }

  createRowPrice(data) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(data.price);
    cell.appendChild(cellText);
    cell.className = "sortable-table__cell ";
    return cell;
  }

  createRowSales(data) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(data.sales);
    cell.appendChild(cellText);
    cell.className = "sortable-table__cell ";
    return cell;
  }

  sort(fieldValue, orderValue) {
    var colNum;
    var k = orderValue === "asc" ? 1 : -1;

    if (fieldValue === "title") {
      colNum = 1;
    } else if (fieldValue === "quantity") {
      colNum = 2;
    } else if (fieldValue === "price") {
      colNum = 3;
    } else if (fieldValue === "sales") {
      colNum = 4;
    } else {
      return;
    }

    let tbody = document.body.querySelector("tbody");
    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch (typeof fieldValue) {
      case "number":
        compare = function (rowA, rowB) {
          return (
            k * (rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML)
          );
        };
        break;
      case "string":
        compare = function (rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
            ? k * 1
            : k * -1;
        };
        break;
    }

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
