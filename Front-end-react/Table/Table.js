import React    from "react";
import template from "./Table.js";

class Table extends React.Component {
  render() {
    return template.call(this);
  }
  
}

export default Table;
