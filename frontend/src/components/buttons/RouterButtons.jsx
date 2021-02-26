import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

// import { Link } from 'react-router-dom'
const {Link, BrowserRouter} = window.ReactRouterDOM

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default class RouterButtons extends Component {
    // const classes = useStyles();

    // handleClick = (newRoute) => {
    //     const history = useHistory();
    //     history.push(newRoute);
    // };

    render() {
        return (
            <div className={useStyles}>
                
                {/* <Button variant="outlined" color="primary" onClick={this.handleClick('/')}>
                    Users
            </Button>
                <Button variant="outlined" color="primary" onClick={this.handleClick('/posts')}>
                    Posts
            </Button> */}
            </div>
        );
    }
}