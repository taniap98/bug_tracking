import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import axios from 'axios';

class SeeBug extends Component {
    constructor(props){
        super(props);
        this.checked = {
            bugSeverity: localStorage.bugSev,
            bugPriority: localStorage.bugPri,
            bugDescription: localStorage.bugDesc,
            bugLinkCommit: localStorage.bugLinkCom
        }
       this.state = {
            resolve: false,
            linkResolve:""
       }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(){
        if(this.state.resolve){
            axios.put("http://localhost:8080/api/bug/changeStatus/" + localStorage.bugId, this.state)
            .then(res => {
                console.log(this.state.linkResolve);
                if(res.data["ok"]){
                    alert("Bug resolved");
                } else {
                    alert("Insert the link resolve")
                }
                
            })
            .catch(e => console.log(e));
        }
    }


    render() {
        const props = this.props;
        return (
            <div id="div">
                <br></br>
                <Typography variant="h4">See Bug</Typography>
                <br></br>
                <div className="list">
                    <h3>Bug severity: {localStorage.bugSev}</h3>
                    <h3>Bug priority: {localStorage.bugPri}</h3>
                    <h3>Bug description: {localStorage.bugDesc}</h3>
                    <h3>Link commit: </h3>
                    <a href={localStorage.bugLinkCom}>{localStorage.bugLinkCom}</a>
                </div>
                <div id="option">
                    <label className="lb">Choose the status:</label>
                    <label for="res">Resolved</label>
                    <input id="res" type="radio" value="resolved" name="option" onChange = {() => {
                        this.state.resolve = true;
                    }} />
                    <br></br>
                    <label className="lb" for="linkResolve">Link Resolve:</label>
                    <input className="input" id="linkResolve" type="url" onChange={(e) => {
                        this.state.linkResolve = e.target.value;
                    }}></input>
                    <br></br>
                <Button
                    id="log"
                    variant="contained"
                    size="small"
                    onClick={()=>{this.handleSubmit()}}>
                    Submit
                </Button>
                </div>

                <div className="gol"></div>
                </div>

                
        )
    }
}

export default withRouter(SeeBug);