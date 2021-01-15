import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Typography, ButtonGroup} from '@material-ui/core';

class Home extends Component {
    render(){
        const props = this.props;
        return (
            <div>
                <br></br>
                <Typography variant="h6">Login</Typography>
                <br></br>
                    <form>
                        <label>Username: <br/><input type="text" name="username" required /></label><br/>
                        <label>Password: <br/><input type="password" name="password" required /></label><br/>
                        <br></br>
                        <input type="submit" value="Submit" onClick={() => {props.history.push("/about")}} />
                    </form>
            </div>
        )
    }
}

export default withRouter(Home);