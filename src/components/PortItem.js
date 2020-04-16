import React from 'react';
import {Typography,  Grid, Card, Paper} from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';

const PortItemCard =styled(Card)({
    padding: '10px'
  });
  

  const StyledGrid =styled(Grid)({
    border: "solid #8c979c thin", 
    borderRadius: "4px",
    margin: '10px'
  });

class PortItem extends React.Component {
    render() {

        return(
                <StyledGrid item xs={5}  container justify="space-between"  direction="column" >
                  <Grid container direction="column" alignItems="center" item >
                     <Grid item>
                       <Typography variant="h6" align="center" >
                         {this.props.item.projectName}
                       </Typography>
                      </Grid>
                      <Grid item >
                        <Typography variant="overline" align="center">
                          {this.props.item.task}
                        </Typography>
                      </Grid>
                  </Grid>
                     <Grid item >
                        <Typography variant="body2" align="center">
                          {this.props.item.description}
                        </Typography>
                     </Grid> 
                </StyledGrid>
                
        )
    }
}

class PortItemNew extends React.Component {
  render() {
      console.log(this.props.item.projectName)
      return(
              <Grid item xs={6} component={Card} >
                  <Typography variant="h6" align="center">
                    {this.props.item.projectName}
                  </Typography>
                  <Typography variant="overline" align="center">
                    {this.props.item.task}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {this.props.item.description}
                  </Typography>
              </Grid>
      )
  }
}




export default PortItem;
 