import React from 'react'; 
import {Typography, Grid, Card, CardContent,  Avatar} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    }
  }));
  

const ImageAvatar = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Avatar 
          src={require("../static/DMpicture.jpg")} alt="Dan Murphy picture"
          className={classes.large}
        />
      </div>
    );
  }
  

class Profile extends React.Component {
    render() {
        return(
            <Card spacing={5}>
              <CardContent>
                <Grid container direction="row" alignItems="center" justify="center" spacing={4} >
                  <Grid item xs={12} />
                  <Grid item >
                    <Typography variant="h4" xs={8}>
                      {this.props.personalInfo.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} >
                    <ImageAvatar imageLoc={this.props.personalInfo.imageLoc}/>
                  </Grid>
                  <Grid container direction="column" spacing={2}>
                    <Grid item></Grid>
                    <Grid item></Grid>
                    <Grid item>
                      <Typography variant="body2" align="center">
                        {this.props.personalInfo.about}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} />
                </Grid>
              </CardContent>
            </Card>
        )
    }
}

export default Profile;
