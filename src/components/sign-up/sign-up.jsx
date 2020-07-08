import React from'react';
import './sign-up.style.scss';

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

    valEmail = event =>{
        const {email ,setmail}=  event.target;
  
        this.setState({ [email]: setmail });
      }
      valPass = event =>{
        const {pass ,setPass}=  event.target;
        this.setState({ [pass]: setPass });
      }
      
    valUser= event=>{
        const {user ,setUser}=  event.target;
        this.setState({ [user]: setUser });
    }
    valConfirm= event=>{
        const {confirm ,setConfirm}=  event.target;
        this.setState({ [confirm]: setConfirm });
    }
    render(){
        return(
            <div className='Sign-up'>

                <form onSubmit={this.handleSubmit}>

                <div className='User'> <b>User</b></div>
                <input className='User'
                name='user'  
                type={this.state.email} 
                placeholder="Enter User Name" 
                onChange={this.valUser}
                required
                />

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

                <div className='confirm'><b>Confirm Password</b></div>
                <input className='confirm'
                name='confirm' 
                type={this.state.password} 
                placeholder="confirm" 
                onChange={this.valConfirm}
                required
                />

                <button type='submit'> Sign up</button>

              </form>
            </div>
        )
    }
}
export default Signup;