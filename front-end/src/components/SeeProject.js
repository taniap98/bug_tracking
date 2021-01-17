import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Typography, ButtonGroup, Input } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BugReportIcon from '@material-ui/icons/BugReport';
import axios from 'axios';

class SeeProject extends Component {
    constructor(props){
        super(props);
        this.checked = {
            userId: localStorage.userId,
            projectId: localStorage.projId
        }
        this.state  = {
            mp: false,
            tst: false
        }
    }

    handleSubmit(){
        if(this.state.mp){
            axios.post("http://localhost:8080/api/mp/add", this.checked)
            .then(res => {
                alert("You are now MP on this project");
                this.state.mp = false;
            })
            .catch(e => console.log(e));
        }
        if(this.state.tst){
            axios.post("http://localhost:8080/api/tst/add", this.checked)
            .then(res => {
                alert("You are now TST on this project");
                this.state.tst = false;
            })
            .catch(e => console.log(e));
        }
    }

    render() {
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">See Project</Typography>
                <br></br>
                <ButtonGroup variant="contained">
                    <Button
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        color="primary"
                        size="small"
                        onClick={() => {
                            props.history.push("/addbug")
                        }}>
                        Add Bug
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<BugReportIcon />}
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
                    <input id="mp" type="radio" value="MP" name="option" onChange={() => {
                        this.state.mp = !this.state.mp;
                    }} />
                    <label for="mp">MP</label>
                    <input id="tst" type="radio" value="TST" name="option" onChange={() => {
                        this.state.tst = !this.state.tst;
                    }} />
                    <label for="tst">TST</label>
                </div>

                <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                        this.handleSubmit();
                    }}>
                    Submit
                </Button>
                <br></br>
                <br></br>
                <div>
                    <h3>{localStorage.projName}</h3>
                    <a href={localStorage.projRepository}>{localStorage.projRepository}</a>
                </div>

            </div>

        )
    }
}

export default withRouter(SeeProject);