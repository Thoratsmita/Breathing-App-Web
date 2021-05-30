import React,{Component} from "react";
import TextField from '@material-ui/core/TextField';


class PostProperty extends Component{
  constructor(props){
    this.state={
      name:'',
      phone:'',
    }
  }

  ChangeName =(event) =>
  {
    this.setState({name:event.target.value});
  }
  ChangePhone =(event) =>
  {
    this.setState({phone:event.target.value});
  }
  handleSubmit = () =>{
    var data = {
      "name":this.state.name,
      "phone":this.state.phone
    }
    fetch('/',{
      method:'POST',
      headers:{
          'Accept':'application/JSON',
          'Content-Type':'application/JSON'
      },
      body:JSON.stringify(data)
  })
  }
  
  
  render(){
    return(
      <div>
        <div>
        <form  noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value ={this.state.name} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value ={this.state.phone} />
        </form>
        

        </div>
        <button onClick ={this.handleSubmit}>Post</button>
      </div>
    )
  }
}

export default PostProperty;
