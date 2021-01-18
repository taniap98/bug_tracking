import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

class SeeBug extends Component {
    constructor(props){
        super(props);
        this.checked = {
            bugSeverity: localStorage.bugSev,
            bugPriority: localStorage.bugPri,
            bugDescription: localStorage.bugDesc,
            bugLinkCommit: localStorage.bugLinkCom
        }
       
    }

    render() {
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">See Bug</Typography>
                <br></br>
                    <h3>Bug severity: {localStorage.bugSev}</h3>
                    <h3>Bug priority: {localStorage.bugPri}</h3>
                    <h3>Bug description: {localStorage.bugDesc}</h3>
                    <h3>Link commit: </h3>
                    <a href={localStorage.bugLinkCom}>{localStorage.bugLinkCom}</a>

                <div id="option">
                    <label className="lb">Choose the status:</label>
                    <label for="res">Resolved</label>
                    <input id="res" type="radio" value="resolved" name="option" />
                    <label for="unr">Unresolved</label>
                    <input id="unr" type="radio" value="unresolved" name="option" />
                    <br></br>
                    <label className="lb" for="link">Link Resolve:</label>
                    <input id="link" type="url"></input>
                    <br></br>
                <Button
                    id="bb"
                    variant="contained"
                    size="small">
                    Submit
                </Button>
                </div>

               
                </div>

                
        )
    }
}

export default withRouter(SeeBug);