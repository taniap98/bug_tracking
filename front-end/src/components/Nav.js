import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

class Nav extends Component {
    render(){
        const props = this.props;
        return (
            <React.Fragment>
                <AppBar style={{position: "relative"}}>
                    <Toolbar>
                        <Typography variant="h6">
                            <Button 
                            style={{color: "white"}}
                            onClick={() => {
                                props.history.push("/")
                            }}>
                                Bug Tracking
                            </Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default withRouter(Nav);