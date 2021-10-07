import "./Registration.css";
import React from "react";
import Table from "../Table/index";

function template() {
  const {stu_name,stu_location,stu_class}=this.state.data; 
const {students,flag}=this.state;

  return (
  <div className="registration container-fluid mb-5">
  <h1 className="text-center mb-5">---------Registration---------</h1>
  <div className="column form-group">
  <div className="col-7 text-right radius-5">Enter Name:<input value={stu_name} id="stu_name" onChange={this.fn.bind(this)}/></div>
  <div className="col-7 text-right">Enter Class:<input value={stu_class} id="stu_class" onChange={this.fn.bind(this)}/></div>
  <div className="col-7 text-right">Enter Loc:<input value={stu_location} id="stu_location" onChange={this.fn.bind(this)}/></div>
  </div>
<div>
  {flag > 0?<div className="col-7 text-right"><button className="btn-primary" onClick={()=>this.fnUpdate()}>Update</button></div>:
  <div className="col-7 text-right"><button className="btn-primary" onClick={this.fnreg.bind(this)}>Register</button></div>}
  </div>
  <div><Table students={students}  fnDelete={this.fnDelete} fnUpdate={this.fnUpdate} fnEdit={this.fnEdit}/></div>
 


  </div>
 
  );
};

export default template;
