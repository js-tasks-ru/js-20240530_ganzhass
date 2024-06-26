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
    //body reference
    var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    tbl.className = "sortable-table";

    var tblBody = document.createElement("tbody");
    tblBody.className = "sortable-table";

    for (var k = 0; k <= this.headerConfig.length; k++) {
      var headerT = document.createElement("th");
      headerT.className = "sortable-table__header";
      var headerText = document.createTextNode("header " + k);
      headerT.appendChild(headerText);

      tblBody.appendChild(headerT);
    }

    // cells creation
    for (var j = 0; j <= this.headerConfig.length; j++) {
      // table row creation
      var row = document.createElement("tr");
      row.className = "sortable-table__row";
      for (var i = 0; i < this.headerConfig.length; i++) {
        // create element <td> and text node
        //Make text node the contents of <td> element
        // put <td> at end of the table row
        var cell = document.createElement("td");
        cell.className = "sortable-table__cell";

        var cellText = document.createTextNode(
          "cell is row " + j + ", column " + i
        );

        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      //row added to end of table body
      tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to
    tbl.setAttribute("border", "2");
  }
  sort(fieldValue, orderValue) {}
  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
