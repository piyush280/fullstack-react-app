import React    from "react";
import template from "./Table.jsx";

class Table extends React.Component {
  constructor(){
    super();
  }
  render() {
    return template.call(this);
  }

}

export default Table;
