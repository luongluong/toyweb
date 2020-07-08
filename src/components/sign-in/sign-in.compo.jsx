import React from 'react';
import './sign-in.style.scss';

//import { Form,FormGroup, Label, Input} from 'reactapp';
//import { Button, FormControl, ControlLabel } from "react-bootstrap";

//class to be created to store Users' info
class SignIn extends React.Component{
    constructor(props){
    super(props);
        this.state ={

            email:'',
            password:''
        };
       
    }

    handleSubmitvent= event =>{  // set back to empty (Controlled Form in React)
      event.preventDefault();
      this.setState({email:'', password:''});
    }

    /*handleChange = event =>{
      const {val ,name}=  event.target;
      this.setState({ [val]: name });
    } */

    valEmail = event =>{
      const {email ,setmail}=  event.target;

      this.setState({ [email]: setmail });
    }
    valPass = event =>{
      const {pass ,setPass}=  event.target;
      this.setState({ [pass]: setPass });
    }

    
    render(){
        return(
          
          <div className='Sign-in'>

              <form onSubmit={this.handleSubmit}> 
              
                <div className='email'> <b>Email</b></div>
                <input className='Email'
                name='email'  
                type={this.state.email} 
                placeholder="Enter Email" 
                onChange={this.valEmail}
                required
                />
                
                <div className='pass'><b>Password</b></div>
                <input className='Password'
                name='password' 
                type={this.state.password} 
                placeholder="Enter Password" 
                onChange={this.valPass}
                required
                />

              <p></p>
               <button className='login-button' type="submit">Login</button>
              </form>

            <form action='/sign-up'>
            <p></p>
            <button className='signup-button'   type="submit">Create Account</button>
              
            </form>
          </div>
        )
    };
}
export default SignIn;

