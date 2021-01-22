import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProjectList from './ProjectList'

class About extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h4">Homepage</Typography>
                <br></br>
                    <Button 
                    variant="contained"
                    startIcon={<AddCircleIcon/>} 
                    color="primary" 
                    size="large"
                    onClick={() => {
                        props.history.push("/addproject")
                    }}>
                        Add Project
                    </Button>

                <div ><ProjectList /></div>

                {/* <div className="gol"></div> */}

            </div>
        )
    }
}

export default withRouter(About);