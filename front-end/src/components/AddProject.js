import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup} from '@material-ui/core';
import axios from 'axios';

class AddProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            repository:'',
            userId: localStorage.userId
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/api/project/add", this.state,  { withCredentials: true })
        .then(res => {
            this.props.history.push("/about")
        })
        .catch(e =>{
            alert("Check all fields");
        })
    }
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">Add Project</Typography>
                <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name: <br/>
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label><br/>
                        <label>Repository: <br/>
                            <input 
                                type="text" 
                                name="repository" 
                                required
                                value={this.state.repository}
                                onChange={this.handleChange}
                            />
                        </label><br/>
                        <br></br>
                        <input 
                            type="submit" 
                            value="Add" 
                            onClick={() => {
                               // props.history.push("/about")
                                }} />
                    </form>
            </div>
        )
    }
}

export default withRouter(AddProject);