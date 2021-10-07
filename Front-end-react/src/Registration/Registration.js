import React    from "react";
import template from "./Registration.jsx";
import axios from "axios";

class Registration extends React.Component {
  constructor(){
    super();
    this.state={
      data:{
        stu_id:'',
        stu_name:'',
        stu_class:'',
        stu_location:'',
      },
      students:[],
    }
    this.fnUpdate=this.fnUpdate.bind(this);
    this.fnEdit=this.fnEdit.bind(this);
    // this.fnGetStudents=this.fnGetStudents(this);

  }
  render() {
    return template.call(this);
  }

  componentDidMount(){
    this.fnGetStudents();
  }

  fn(e){
 let value=e.target.value;
 var id=e.target.id

this.setState({
  data:{
    ...this.state.data,
    [id]:value 
  }
})


}
fnreg(){
  console.log("Hello From Fnreg");
  console.log(this.state.data);
  let httpobj = new XMLHttpRequest();
  httpobj.open('post',"http://localhost:8001/student/insert-std");
  httpobj.setRequestHeader('Content-type','application/json');
  httpobj.send(JSON.stringify(this.state.data));
  

  httpobj.onload=()=>{
    var res = httpobj.responseText;
    console.log(httpobj.responseText);
    res = JSON.parse(res);
    if(res.affectedRows>0){
      alert("Success");
      this.setState({
        data: {
          
        stu_name:'',
        stu_location:'',
        stu_class:''
        },
      });
      this.fnGetStudents();
    }else{
      alert("fail...try again")
    }
    httpobj.onerror=()=>{
      var res = httpobj.responseText;
      console.log(httpobj.responseText);
      alert("fail"+res);
   }

  }
    
  }

 fnGetStudents(){
    fetch('http://localhost:8001/student/get-std')
    .then((res)=>{
      return res.json();
    })
    .then((result)=>{
      this.setState({
        students:result
      })
    })
    console.log("students"+this.state.students);
  }

  fnDelete (id){
    let isOk = window.confirm("R u sure..?");
    if(isOk){
      axios.delete("http://localhost:8001/student/delete-std?id="+id)
      .then((res)=>{
        console.log(res);
        if(res.data == "delete sucessfelly"){
          alert('Sucess..');
          }
        else{
          alert('failed..');
        }
        this.fnGetStudents();
      })
    }
  }

fnEdit(obj){
  
  const {stu_class,stu_location,stu_name,stu_id} = obj;
  let isok = window.confirm("Confirm Edit..")
 
  if(isok){
    this.setState({
      data:{
        stu_id:stu_id,
        stu_name:obj.stu_name,
        stu_class:obj.stu_class,
        stu_location:obj.stu_location
      },
      flag:1
    })
 
    }
}

fnUpdate(){
  console.log("from fn update piyush")
  fetch("http://localhost:8001/student/update-std?stu_id="+this.state.data.stu_id,
{
    method:'PUT',
    headers:{
     'Accept':'application/json',
     'Content-Type':'application/json'
    },
    body:JSON.stringify(this.state.data)
 
   }).then((response)=> response.json())
   .then((json) =>{
    this.fnGetStudents();
    });
    this.setState({
      data: {
        stu_name:'',
        stu_location:'',
        stu_class:''
      },
      flag:0
    });
  }
}
export default Registration;
