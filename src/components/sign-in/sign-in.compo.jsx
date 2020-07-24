import React from 'react';
import './sign-in.style.scss';
import {auth} from '../../firebase/firebase.js';

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

    handleSubmit= async event =>{  // set back to empty (Controlled Form in React)
      event.preventDefault();
      const {email,password} =this.state;
      
      console.log("made it into the submit event");
      try{
        // creates the object 
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email:'', password:''});

      } catch(error){
        console.log("there was an error");
      }
    };

    /*handleChange = event =>{
      const {val ,name}=  event.target;
      this.setState({ [val]: name });
    } */
    handleChange = event =>{
      console.log("inside the handle change");
      const{name, value}= event.target;
      this.setState({ [name] : value });
  };

/*    valEmail = event =>{
      const {email ,setmail}=  event.target;

      this.setState({ [email]: setmail });
    }
    valPass = event =>{
      const {pass ,setPass}=  event.target;
      this.setState({ [pass]: setPass });
    }   */

    
    render(){
      const {email,password} =this.state;

        return(
          
          <div className='Sign-in'>

              <form onSubmit={this.handleSubmit}> 
              
              <div className='Email'> <b>Email</b></div>
                <input className='email'
                name='email'  
                type='email'
                value={email}
               // placeholder="Enter Email" 
                onChange={this.handleChange}
                required
                />
                
                <div className='Password'><b>Password</b></div>
                <input className='password'
                name='password' 
                type='password'  
                value={password}
               // placeholder="Enter Password" 
                onChange={this.handleChange}
                required
                />

              <p></p>
               <button type='submit'>Login</button>
              </form>

            <form action='/sign-up'>
            <p></p>
            <button className='signup-button'  type="submit">Create Account</button>
              
            </form>
          </div>
        )
    };
}
export default SignIn;

