import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup} from '@material-ui/core';

class AddBug extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">Add Bug</Typography>
                <br></br>
                    <form>
                        <label>Severity: <br/><input type="number" name="severity" required /></label><br/>
                        <label>Priority: <br/><input type="number" name="priority" required /></label><br/>
                        <label>Description: <br/><input type="text" name="description" required /></label><br/>
                        <label>Link Commit: <br/><input type="url" name="linkCommit" required /></label><br/>
                        <br></br>
                        <input type="submit" value="Add" onClick={() => {props.history.push("/about")}} />
                    </form>
            </div>
        )
    }
}

export default withRouter(AddBug);