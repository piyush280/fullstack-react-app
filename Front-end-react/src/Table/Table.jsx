import "./Table.css";
import React from "react";

function template() {
  const { students, fnDelete,fnEdit} = this.props;

  return (
    <div className="Table.css">
    <h1 className="text-center">Students</h1>
    <div className="table-responsive">
      <table className="table table-bordered">
        <tbody>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Class</th>
          <th>Location</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </tbody>

          {students.map((obj) => {
          return <tr>
            <td>{obj.stu_id}</td>
            <td>{obj.stu_name}</td>
            <td>{obj.stu_class}</td>
            <td>{obj.stu_location}</td>
            <td><button onClick={()=> fnEdit(obj)} className="btn btn-primary">EDIT</button></td>
            <td><button onClick={() => fnDelete(obj.stu_id)} className="btn btn-danger">Delete</button></td>
            
          </tr>
        })
        }

        
      </table>
    </div>
  </div>
  );
};

export default template;
