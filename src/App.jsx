
import './App.css';
import { Component } from 'react';
import {Form} from "./Components/Form"

class App extends Component {

state={
  data:''
}

getFromData=(data)=>{
  this.setState({data:data})
}

 render(){
  return (

    <div >
  <Form onSubmit={this.getFromData}/>



     {/* <form>
    <label htmlFor="name">
    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
    Name</label>
    <label >
    <input type="tel" name="tel" value={this.state.tel} onChange={this.handleTelChange}/>
    Phone number </label>
     </form> */}
    </div>
  );
}
 }

export default App;
