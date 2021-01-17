import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup, Input} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BugReportIcon from '@material-ui/icons/BugReport';

class SeeProject extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">See Project</Typography>
                <br></br>
                <ButtonGroup variant="contained">
                <Button 
                    variant="contained"
                    startIcon={<AddCircleIcon/>} 
                    color="primary" 
                    size="small"
                    onClick={() => {
                        props.history.push("/addbug")
                    }}>
                        Add Bug
                    </Button>

                    <Button 
                    variant="contained"
                    startIcon={<BugReportIcon/>} 
                    color="primary" 
                    size="small"
                    onClick={() => {
                        props.history.push("/seebugs")
                    }}>
                        See Bugs
                    </Button>
                    </ButtonGroup>

                <div id="option">
                    <label>Choose an option:</label>
                    <input id="mp" type="radio" value="MP" name="option" />
                    <label for="mp">MP</label>    
                    <input id="tst" type="radio" value="TST" name="option" />
                    <label for="tst">TST</label>    
                </div>

                <Button 
                    variant="contained"
                    size="small">
                        Submit
                </Button>
<div>
                        <h3>{localStorage.projName}</h3>
                        <a href={localStorage.projRepository}>{localStorage.projRepository}</a>
                    </div>

            </div>

        )
    }
}

export default withRouter(SeeProject);