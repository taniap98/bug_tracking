import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup} from '@material-ui/core';

class AddProject extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">Add Project</Typography>
                <br></br>
                    <form>
                        <label>Name: <br/><input type="text" name="name" required /></label><br/>
                        <label>Repository: <br/><input type="text" name="repository" required /></label><br/>
                        <br></br>
                        <input type="submit" value="Add" onClick={() => {props.history.push("/about")}} />
                    </form>
            </div>
        )
    }
}

export default withRouter(AddProject);