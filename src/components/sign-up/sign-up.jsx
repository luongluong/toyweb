import React from'react';
import './sign-up.style.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.js';
// need to add Auth from google for 

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            username:'',
            email:'',
            password:'',
            confirmPass:''
        };
    }

    handleSubmit= async event =>{
        event.preventDefault();
        const {username,email,password,confirmPass} =this.state;
        if(password !== confirmPass){
            alert("password do not match");
            return;
        }

        try{
            
           const {user} = await auth.createUserWithEmailAndPassword(email, password);
          
            await createUserProfileDocument(user, {username});

           this.setState({
            username:'',
            email:'',
            password:'',
            confirmPass:''
           });
           
           
        } catch(error)
        {
            console.error(error);
        }
    }

    handleChange = event =>{
        const{name, value}= event.target;
        this.setState({ [name] : value });
    };

 /*   valEmail = event =>{
        const {email ,setmail}=  event.target;
  
        this.setState({ [setmail]: email });
      }
      valPass = event =>{
        const {pass ,setPass}=  event.target;
        this.setState({ [setPass]: pass });
      }
      
    valUser= event=>{
        const {user ,setUser}=  event.target;
        this.setState({ [setUser]: user });
    }
    valConfirm= event=>{
        const {confirm ,setConfirm}=  event.target;
        this.setState({ [setConfirm]: confirm });
    } */
    render(){
        const {username,email,password,confirmPass} =this.state;
        return(
            <div className='Sign-up'>

                <form onSubmit={this.handleSubmit}>

                <div className='user'> <b>User</b></div>
                <input className='user'
                name='username'  
                type='username'
                value={username}
               // placeholder="Enter Email" 
                onChange={this.handleChange}
                required
                />

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

                <div className='Password'><b>Confirm password</b></div>
                <input className='password'
                name='confirmPass' 
                type='password'  
                value={confirmPass}
               // placeholder="Enter Password" 
                onChange={this.handleChange}
                required
                />


                <button type='submit'> Sign up</button>

              </form>
            </div>
        )
    }
}
export default Signup;