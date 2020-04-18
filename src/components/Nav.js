import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4)
    },
  },
}));

export default function Nav(props) {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <Button color="primary" onClick={props.displayProjects} >Projects</Button>
      <Button color="primary">Resume</Button>
      <Button color="primary">About</Button>
    </div>
  );
}

