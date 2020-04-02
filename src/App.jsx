import React from 'react';
import {Container, Grid, Paper} from '@material-ui/core';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            personalInfo: {
                name: "Dan Murphy",
                email: "Murphy.Dans@gmail.com",
                imageLoc: "",
                about: "DM has a varied educational background with diverse interests and abilities.  The portfolio draws together some projects he has worked on."
            },
            projectList: [
                {name: "Project Title 1", 
                 description: "Here is a description of what took place", 
                 techDesc: "This is more on the tech behind the project", 
                 sortOrder: 1, 
                 dateString: "March 2020"                 
                }, 
                {name: "Project Title 2", 
                description: "Here is a description of what took place", 
                techDesc: "This is more on the tech behind the project", 
                sortOrder: 2, 
                dateString: "Dec 2019"                 
               }

            ]
        }
    }

   render() {
      return (
         <Container maxWidth="lg">
           <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
             <Grid item xs={4}>
               <Paper elevation={0}>
                 <Profile personalInfo={this.state.personalInfo} />
               </Paper>
             </Grid>
             <Grid item xs={8}>
               <PortItems />
             </Grid>
           </Grid>
         </Container>
      );
   }
}

class Profile extends React.Component {
    render() {
        return(
            <div>
                {this.props.personalInfo.name}
                <br />
                {this.props.personalInfo.email}
                <br />
                {this.props.personalInfo.about}
            </div>
        )
    }
}

class PortItems extends React.Component {
    render() {
        return(
            <div>
                <h3>Placeholder text</h3>
             </div>
        )
    }
}



export default App;
 