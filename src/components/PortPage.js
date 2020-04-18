import React from 'react';
import PortItem from './PortItem'
import {Grid} from '@material-ui/core'; 



class PortPage extends React.Component {
    render() {

        return(

            <Grid item xs={12} container direction="row" justify="space-evenly"  spacing={5} >
                        <PortItem item={this.props.projectList[0]}/>
                        <PortItem item={this.props.projectList[1]}/>
                        <PortItem item={this.props.projectList[2]}/>
                        <PortItem item={this.props.projectList[3]}/>
                        <PortItem item={this.props.projectList[4]}/>
                        <PortItem item={this.props.projectList[5]}/>
                        <PortItem item={this.props.projectList[6]}/>
                        <PortItem item={this.props.projectList[7]}/>
                        <PortItem item={this.props.projectList[8]}/>
                        <PortItem item={this.props.projectList[9]}/>
                        <PortItem item={this.props.projectList[10]}/>
                        <PortItem item={this.props.projectList[11]}/>
                        <PortItem item={this.props.projectList[12]}/>
                        <PortItem item={this.props.projectList[13]}/>
            </Grid>
        )}
}

export default PortPage; 
