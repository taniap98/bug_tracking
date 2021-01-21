import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import BugList from './BugList';

class SeeBugs extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h4">See Bugs</Typography>
                <br></br>
                <div ><BugList /></div>
                
                <div className="gol"></div>
            </div> 
        )
    }
}

export default withRouter(SeeBugs);