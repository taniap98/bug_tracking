import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Typography} from '@material-ui/core';

class SeeBugs extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">See Bugs</Typography>
                <br></br>
            </div>
        )
    }
}

export default withRouter(SeeBugs);