import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class About extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">Homepage</Typography>
                <br></br>
                <ButtonGroup variant="contained">
                    <Button 
                    startIcon={<ListIcon/>} 
                    color="primary" 
                    size="small"
                    onClick={() => {
                        props.history.push("/about")
                    }}>
                        See Projects
                    </Button>

                    <Button 
                    startIcon={<AddCircleIcon/>} 
                    color="primary" 
                    size="small"
                    onClick={() => {
                        props.history.push("/addproject")
                    }}>
                        Add Project
                    </Button>
                </ButtonGroup>

            </div>
        )
    }
}

export default withRouter(About);