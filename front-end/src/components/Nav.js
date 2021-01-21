import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {

    logOut = (e) => {
        e.preventDefault();
        
        axios.delete("http://localhost:8080/api/logout")
        .then(res => {
            localStorage.clear();
            this.props.history.push("/");
            
        })
        .catch(e =>{
            
        })
    }
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
                                props.history.push("/about")
                            }}>
                                Bug Tracking
                            </Button>
                            <Button 
                            style={{color: "white"}}
                            onClick={this.logOut}>
                                Log out
                            </Button>
                            
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default withRouter(Nav);