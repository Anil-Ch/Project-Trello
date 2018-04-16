import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TaskList extends React.Component{

    render(){
        return(
                    <MuiThemeProvider>
                        <DropDownMenu value={this.props.value} onChange={this.props.handleChange}>
                            <MenuItem value={this.props.Title}/>
                            <MenuItem value="To Do" primaryText="To Do" />
                            <MenuItem value="Doing" primaryText="Doing" />
                            <MenuItem value="Done" primaryText="Done" />
                        </DropDownMenu>
                    </MuiThemeProvider>
        );
    }
}
export default TaskList;