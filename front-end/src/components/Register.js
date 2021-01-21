import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Typography} from '@material-ui/core';
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            firstName: '',
            lastName: '',
            nrMP: 0,
            nrTST: 0
        };
        this.user = '';
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/api/user/register", this.state)
        .then(res => {
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
        })
        .catch(e =>{
            alert(e);
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render(){
        const props = this.props;
        const {email, password, firstName, lastName, nrMP, nrTST} = this.state;
        return (
            <div id="login">
                <br></br>
                <Typography variant="h4">Register</Typography>
                <br></br>
                    <form className="login" id="register" onSubmit={this.handleSubmit}>
                        <label>Email: <br/>
                            <input 
                                className="input"
                                type="text" 
                                name="email" 
                                required 
                                value={this.state.email}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <label>Password: <br/>
                            <input 
                                className="input"
                                type="password" 
                                name="password" 
                                required 
                                value={this.state.password}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <label>First Name: <br/>
                            <input 
                                className="input"
                                type="text" 
                                name="firstName" 
                                required 
                                value={this.state.firstName}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <label>Last Name: <br/>
                            <input 
                                className="input"
                                type="text" 
                                name="lastName" 
                                required 
                                value={this.state.lastName}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <label>Number MP: <br/>
                            <input 
                                className="input"
                                type="number" 
                                name="nrMP" 
                                required 
                                defaultValue="0"
                                value={this.state.nrMP}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <label>Number TST: <br/>
                            <input 
                                className="input"
                                type="number" 
                                name="nrTST" 
                                required 
                                defaultValue="0"
                                value={this.state.nrTST}
                                onChange={this.handleChange}/>
                        </label><br/>
                        <br></br>
                        <input 
                            id="log"
                            type="submit" 
                            value="Register" 
                            onClick={() => {

                            }
                        } />
                        <br></br>
                        <input 
                            id="log"
                            type="submit" 
                            value="Already registered? Login!" 
                            onClick={() => {
                                props.history.push("/")
                            }
                        } />
                    </form>
            </div>
        )
    }
}

export default withRouter(Register);