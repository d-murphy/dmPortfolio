import React from 'react';
import {Typography, Container, Grid, Paper, Card, AppBar, Tabs, Tab} from '@material-ui/core';

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
              { projectName: 'SuffolkLibraryPrograms.info', task: 'Web Development', tech: 'Vanilla JS, Express', description: 'A filterable page of open library programs accross Suffolk County.  ', techDesc: 'Frontend using vanilla JS.  Backend built with Express JS', sort: '1'},
              { projectName: 'MVA Analysis - PSEG Long Island', task: 'Modeling, Data Visualization', tech: 'R, Leaflet', description: 'MVA dataset joined with Vehicle GPS data to power regression model identifying riskiest LI driving locations ', techDesc: 'API calls and data manipulation / analysis in R.  Presentation in R Notebooks', sort: '2'},
              { projectName: 'NYS Public Library Peer Groups', task: 'Data Visualization, Web Development', tech: 'R, Shiny', description: 'Web application mapping the statistical peers of each public library in NYS. ', techDesc: 'Data analysis in R.  Presentation with Shiny and Leaflet.', sort: '3'},
              { projectName: 'Retirement Calculator', task: 'Web Development', tech: 'React, Vanilla JS, Shiny', description: 'Revisted several times to explore different frameworks and programming languages, the most polished version uses React.  Similar versions in Shiny and VanillaJS / plotly.js.  ', techDesc: '', sort: '4'},
              { projectName: 'Craigslist Car Ads - Exploratory Data Analysis', task: 'Data Visualization', tech: 'R, ggplot', description: 'Notebook exploring used car listings on Craigslist.  ', techDesc: 'R Notebook utilizing ggplot and dplyr for EDA', sort: '5'},
              { projectName: 'NHL Game Data - Exploratory Data Analysis', task: 'Data Visualization', tech: 'R, ggplot', description: 'Notebook exploring NHL game data. ', techDesc: 'R Notebook utilizing ggplot and dplyr for EDA', sort: '6'},
              { projectName: 'NCAA Conference Realignment - Data Vis', task: 'Data Visualization', tech: 'R, ggplot', description: 'Visualizatoin of NCAA Mens basketball conference realignment', techDesc: 'R Notebook utilizing ggplot', sort: '7'},
              { projectName: 'Injury Analysis - PSEG Long Island', task: 'Modeling, Data Analysis', tech: 'R', description: 'Simulation models to identify likelihood of meeting safety goals', techDesc: 'R notebook presenting injury trends', sort: '8'},
              { projectName: 'FD Alarm Map Dashboard', task: 'Data Visualization, Web Development', tech: 'R, Shiny', description: 'Dashboard mapping Fire Department alarms.', techDesc: 'Shiny web application with leaflet and ggplot visualizations', sort: '9'},
              { projectName: 'PAT Index', task: 'Modeling', tech: 'R', description: 'Simulation model predicting outcomes of an FD Drill Competition.  ', techDesc: 'R scripts for ingesting data and simulation modeling with presentation on a Wordpress blog', sort: '10'},
              { projectName: 'Interactive Display - FD Drill Competition Winners', task: 'Web Development', tech: 'Vanilla JS, Plotly JS', description: 'Distributions of winning times from the an FD Drill Competition.  ', techDesc: 'Vanilla JS with plotly visualizations', sort: '11'},
              { projectName: 'Run History Dashboard', task: 'Web Development, Data Visualization', tech: 'Vanilla JS, Plotly JS', description: 'Dashboard exploring an individuals jogging history', techDesc: 'Vanilla JS with plotly visualizations', sort: '12'},
              { projectName: 'Excel Templates - PSEG Long Island', task: 'Data Manipulation', tech: 'Excel', description: 'Joining and modifying data exports to meet routine reporting needs', techDesc: 'Advanced excel formulas to maniuplate raw exports into presentable reports', sort: '13'},
              { projectName: 'Excel Training', task: 'Training', tech: 'Excel', description: 'Trainings for all level at West Islip Library and local businesses', techDesc: '', sort: '14'},            ]
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
               <AppBar position="static">
                 <Tabs>
                   <Tab label="item 1" />
                   <Tab label="item 2" />

                 </Tabs>
               </AppBar>
               <FilteredPortItems items = {this.state.projectList}/>
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

class FilteredPortItems extends React.Component {
  render() {
    console.log(this.props.items[0]);
    return(
    <Grid container  direction="row" justify="center" alignItems="flex-start" spacing={1} >
      <PortItem item={this.props.items[0]}/>
      <PortItem item={this.props.items[1]}/>
      <PortItem item={this.props.items[2]}/>
      <PortItem item={this.props.items[3]}/>
      <PortItem item={this.props.items[4]}/>
      <PortItem item={this.props.items[5]}/>
      <PortItem item={this.props.items[6]}/>
      <PortItem item={this.props.items[7]}/>
      <PortItem item={this.props.items[8]}/>
      <PortItem item={this.props.items[9]}/>
      <PortItem item={this.props.items[10]}/>
      <PortItem item={this.props.items[11]}/>
      <PortItem item={this.props.items[12]}/>
      <PortItem item={this.props.items[13]}/>

    </Grid>
    )
    
  }
}

class PortItem extends React.Component {
    render() {
        console.log(this.props.item.projectName)
        return(
                <Grid item xs={4}>
                  <Card >
                    <p>{this.props.item.projectName}</p>
                    <p>{this.props.item.task}</p>
                    <p>{this.props.item.tech}</p>
                    <p>{this.props.item.description}</p>
                    <p>{this.props.item.techDesc}</p>
                  </Card>
                </Grid>
        )
    }
}



export default App;
 