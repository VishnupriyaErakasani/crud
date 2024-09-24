import React, {useState} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[name,setStudentName]= useState("");
const[tech,setTechnology]= useState("");
const[sub,setSub]= useState("");
const[age,setAge]=useState("");
const[year,setYear]=useState("");

const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{name:name,
tech:tech,
sub:sub,age:age,year:year}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="string"
name="name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="string"
name="tech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>subscription</b></label>
<input
type="Boolean"
name="sub"
onChange={(e)=>{
setSub(e.target.value);
}}
required/>
<label><b>Age</b></label>
<input
type="Number"
name="age"
onChange={(e)=>{
setAge(e.target.value);
}}
required/>
<label><b>year</b></label>
<input
type="Number"
name="year"
onChange={(e)=>{
setYear(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;