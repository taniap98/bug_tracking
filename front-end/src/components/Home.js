import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup} from '@material-ui/core';
import axios from 'axios';
//import User from "../controller/user";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.user = '';
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/api/login", this.state,  { withCredentials: true }, {headers: {"Authorization": true}})
        .then(res => {

            if(res.data["ok"]){
                localStorage.setItem('userId', res.data["logedInUser"]);      
                this.props.history.push("/about")
            } else {
                alert(res.data["message"]);
            }
            
        })
        .catch(e =>{
            
        })
    }
   
    render(){
        const props = this.props;
        const {email, password} = this.state;
        return (
            <div>
                <br></br>
                <Typography variant="h6">Login</Typography>
                <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email: <br/>
                            <input 
                                type="text" 
                                name="email" 
                                required 
                                value={this.state.email}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <label>Password: <br/>
                            <input 
                                type="password" 
                                name="password" 
                                required 
                                value={this.state.password}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <br></br>
                        <input 
                            type="submit" 
                            value="Submit" 
                            onClick={() => {
                            }
                        } />
                        <br></br>
                        <input 
                            id="bb"
                            type="submit" 
                            value="Register" 
                            onClick={() => {
                                props.history.push("/register")
                            }
                        } />
                    </form>
            </div>
        )
    }
}

export default withRouter(Home);