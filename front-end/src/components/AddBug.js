import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import axios from 'axios';

class AddBug extends Component {
    constructor(props){
        super(props);
        this.state = {
            severity: "",
            priority: "",
            description: "",
            linkCommit: "",
            tstId: localStorage.userId,
            projectId: '1'
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/api/bug/add", this.state,  { withCredentials: true }, {headers: {"Content-Type": "application/json"}})
        .then(res => {
            this.props.history.push("/about")
        })
        .catch(e =>{
            alert(e);
        })
    }
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">Add Bug</Typography>
                <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <label>Severity: <br/>
                            <input 
                                type="number" 
                                name="severity" 
                                required 
                                value={this.state.severity}
                                onChange={this.handleChange}
                            /></label><br/>
                        <label>Priority: <br/>
                            <input 
                                type="number" 
                                name="priority" 
                                required 
                                value={this.state.priority}
                                onChange={this.handleChange}
                            /></label><br/>
                        <label>Description: <br/>
                            <input 
                                type="text" 
                                name="description" 
                                required 
                                value={this.state.description}
                                onChange={this.handleChange}
                            /></label><br/>
                        <label>Link Commit: <br/>
                            <input 
                                type="url" 
                                name="linkCommit"
                                required 
                                value={this.state.linkCommit}
                                onChange={this.handleChange}
                            /></label><br/>
                        <br></br>
                        <input 
                            type="submit" 
                            value="Add" 
                            onClick={() => {
                                //props.history.push("/about")
                                }} />
                    </form>
            </div>
        )
    }
}

export default withRouter(AddBug);