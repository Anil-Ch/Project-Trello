import React from "react";
import BoardOption from "./BoardOption";

const divstyle = {
    border: "2px solid black"
};


class CreatedBoardOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {BoardText: "",SelectedBoardName: "",ToDoText: '', DoingText: '', DoneText: '',CurrentBoardHaveText : ''};
        this.HandleTextFieldValueChange = this.HandleTextFieldValueChange.bind(this);
        this.FindBoardTitle = this.FindBoardTitle.bind(this);
        this.FindButtonBoardTitle = this.FindButtonBoardTitle.bind(this);
        this.HandleCreateBoardName = this.HandleCreateBoardName.bind(this);
    }



    HandleTextFieldValueChange(event){
        console.log("CreatedBoardOption -- HandleTextFieldValueChange");
        console.log(this.state.BoardText);
        if(this.state.SelectedBoardName == 'To Do'){
            this.state.ToDoText = event.target.value;
            this.setState({ToDoText: this.state.ToDoText});
        }
        else if(this.state.SelectedBoardName == 'Doing'){
            this.state.DoingText = event.target.value;
            this.setState({DoingText: this.state.DoingText});
        }
        else if(this.state.SelectedBoardName == 'Done'){
            this.state.DoneText = event.target.value;
            this.setState({DoneText: this.state.DoneText});
        }
        //this.state.BoardText = event.target.value;
        //this.setState({BoardText: this.state.BoardText});
    }

    HandleCreateBoardName(flagCreateOrNot){
        console.log("CreatedBoardOption -- HandleCreateBoardName");
        if(flagCreateOrNot) {
            let boardTextTemp;
            if(this.state.SelectedBoardName == 'To Do'){
                boardTextTemp = this.state.ToDoText;
            }
            else if(this.state.SelectedBoardName == 'Doing'){
                boardTextTemp = this.state.DoingText;
            }
            else if(this.state.SelectedBoardName == 'Done'){
                boardTextTemp = this.state.DoneText;
            }
            if (boardTextTemp === "") {
                alert("Board Name Can't be Empty!");
                return;
            }
            if(this.state.SelectedBoardName === 'To Do'){
                this.setState({ToDoText : boardTextTemp});
            }
            else if(this.state.SelectedBoardName === 'Doing'){
                this.setState({DoingText : boardTextTemp});
               }
            else if(this.state.SelectedBoardName === 'Done'){
                this.setState({DoneText : boardTextTemp});
             }
            this.setState({CurrentBoardHaveText: this.state.SelectedBoardName});
        }
        }

    FindButtonBoardTitle(BoardName){
       this.setState({SelectedBoardName : BoardName});
    }


    FindBoardTitle(BoardTitleName, SelectedTaskListOption){debugger
        this.state.CurrentBoardHaveText = BoardTitleName;
        this.setState({CurrentBoardHaveText:  this.state.CurrentBoardHaveText});

        console.log("BoardTitleName --  SelectedTaskListOption");
        console.log(BoardTitleName + " -- " +  SelectedTaskListOption);

        if(BoardTitleName === SelectedTaskListOption){return;}
        //if(BoardTitleName !== this.state.SelectedBoardName) {return;}
        if(BoardTitleName === this.state.CurrentBoardHaveText) {


            if(this.state.ToDoText !== '') {
                if (BoardTitleName === "To Do" && SelectedTaskListOption === "Doing") {
                    this.setState({DoingText: this.state.ToDoText});
                    this.setState({ToDoText: ''});
                    this.setState({CurrentBoardHaveText: 'Doing'});
                }
                else if (BoardTitleName === "To Do" && SelectedTaskListOption === "Done") {
                    this.setState({DoneText: this.state.ToDoText});
                    this.setState({ToDoText: ''});
                    this.setState({CurrentBoardHaveText: 'Done'});
                }
            }

            if(this.state.DoingText !== '') {
                if (BoardTitleName === "Doing" && SelectedTaskListOption === "To Do") {
                    this.setState({ToDoText: this.state.DoingText});
                    this.setState({DoingText: ''});
                    this.setState({CurrentBoardHaveText: 'Doing'});
                }
                else if (BoardTitleName === "Doing" && SelectedTaskListOption === "Done") {
                    this.setState({DoneText: this.state.DoingText});
                    this.setState({DoingText: ''});
                    this.setState({CurrentBoardHaveText: 'Done'});
                }
            }

            if(this.state.DoneText !== '') {
                if (BoardTitleName === "Done" && SelectedTaskListOption === "To Do") {
                    this.setState({ToDoText: this.state.DoneText});
                    this.setState({DoneText: ''});
                    this.setState({CurrentBoardHaveText: 'To Do'});
                }
                else if (BoardTitleName === "Done" && SelectedTaskListOption === "Doing") {
                    this.setState({DoingText: this.state.DoneText});
                    this.setState({DoneText: ''});
                    this.setState({CurrentBoardHaveText: 'Doing'});
                }
            }
        }
}

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div style={divstyle}>
                        <BoardOption Title="To Do" OnBoardNameCreation={this.HandleCreateBoardName} FindButtonClickedboardTitle={this.FindButtonBoardTitle} TextFieldValue={(this.state.ToDoText !== '' || this.state.SelectedBoardName === 'To Do')? this.state.ToDoText: this.state.BoardText} CallBackBoardTitleAndTaskList={this.FindBoardTitle} HandleTextFieldValueChange={this.HandleTextFieldValueChange} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={divstyle}>
                        <BoardOption Title="Doing" OnBoardNameCreation={this.HandleCreateBoardName} FindButtonClickedboardTitle={this.FindButtonBoardTitle} TextFieldValue={(this.state.DoingText || this.state.SelectedBoardName === 'Doing')!== '' ? this.state.DoingText : this.state.BoardText} CallBackBoardTitleAndTaskList={this.FindBoardTitle} HandleTextFieldValueChange={this.HandleTextFieldValueChange}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={divstyle}>
                        <BoardOption Title="Done" OnBoardNameCreation={this.HandleCreateBoardName} FindButtonClickedboardTitle={this.FindButtonBoardTitle} TextFieldValue={(this.state.DoneText !== '' || this.state.SelectedBoardName === 'Done') ? this.state.DoneText : this.state.BoardText} CallBackBoardTitleAndTaskList={this.FindBoardTitle} HandleTextFieldValueChange={this.HandleTextFieldValueChange}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CreatedBoardOption;