import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

//css-in-js
const styles = {
    root: {
        height: '100vh',
        backgroundColor: '#ccc',
    }
}

const Dashboard = ({children, classes}) => (
    <Grid 
        container 
        className={classes.root}
        alignItems="center"
        justify="center"
        >{children}</Grid>
);

export default withStyles(styles)(Dashboard);