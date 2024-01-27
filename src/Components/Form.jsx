import { Component } from "react"

export class Form extends Component{

    state={
       member:"",
       lisence:false,
       whoIs:""
    }

    handleMemberChange =  (e)=>{
        this.setState({
            member: e.currentTarget.name
        })
    }

    onChange =(e)=>{
      this.setState((prevState)=>{
       return{ lisence: !prevState.lisence}
      })
    }

    getName=(e)=>{
        this.setState({whoIs:e.currentTarget.value})
      }

handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.currenttarget.elements.name.value)
    this.props.onSubmit(this.state)
}


render(){
    return(
        <form action="">
            <label >
  <input type="text" name='whoIs' value={this.state.whoIs} onChange={this.getName} />
</label>
            <label htmlFor="">
               <input type="radio" name="student"
                checked={this.state.member === "student"}
                onChange={this.handleMemberChange} />
            </label>
            <label htmlFor="">
              <input type="radio" name="proffesor" 
                  checked={this.state.member === "professor"}
                  onChange={this.handleMemberChange}  />
            </label>
            <hr />
            <label htmlFor="">
            <input type="checkbox" checked={this.state.lisence}  onChange={this.onChange} />
            Погоджуюсь на участь 
            </label>
           <hr />
           <button type="submit">kbnhlk</button>
        </form>
    )
}
}