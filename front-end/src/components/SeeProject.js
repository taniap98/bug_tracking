import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';



class SeeProject extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">See Project</Typography>
                <br></br>
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
            </div>
        )
    }
}

export default withRouter(SeeProject);