import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddCard from './AddCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList';

class BoardOption extends React.Component{
constructor(props){
    super(props);
    this.state = {value: "-1",ButtonBoardName:""};
    this.handleChange = this.handleChange.bind(this);

}

    handleChange(event, index, value){debugger
        console.log("BoardTitleName -- TaskListOption Selected ");
        console.log(this.props.Title+ "  "+ value);
        this.props.CallBackBoardTitleAndTaskList( (this.props.Title),value);
        this.state.value = "-1";
        this.setState({value: this.state.value});
    }

    render(){
       return(
            <div>
                {this.props.BoardName}

                <div className="panel panel-primary">
                    <div className="row">
                             <div className="col-md-6">
                                <div className="panel-heading">
                                    {this.props.Title}
                                </div>
                             </div>
                             <div className="col-md-2">
                                <TaskList value={this.props.value}  handleChange={this.handleChange}/>
                             </div>
                    </div>
                </div>

                <div className="panel-body">
                    <MuiThemeProvider>
                        <input type="text" aria-placeholder="Board Name" value={this.props.TextFieldValue}  style={{width:"absolute"}} disabled/>
                    </MuiThemeProvider>
                </div>

                <div className="panel-footer">
                        <AddCard TextFieldValue={this.props.BoardName}
                                 OnTextFieldValueChange={this.props.HandleTextFieldValueChange}
                                 FindButtonClickedboardTitle={this.props.FindButtonClickedboardTitle}
                                 OnBoardNameCreation={this.props.OnBoardNameCreation}
                        Title= {this.props.Title}>Add Card</AddCard>
                </div>
            </div>
        );
    }
}

export default BoardOption;