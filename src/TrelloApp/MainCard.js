import React from 'react';
import DialogExampleSimple from "./DialogExampleSimple";
import DisplayBoardNameList from "./DisplayBoardNameList";

class MainCard extends React.Component{

    constructor(props){
        super(props);
        this.state ={
          BoardNameList : [],
          BoardName: "",
          BoardTextSavedOrNot: true
         };
        this.HandleTextFieldValueChange = this.HandleTextFieldValueChange.bind(this);
        this.HandleCreateBoardName = this.HandleCreateBoardName.bind(this);
     }

    HandleTextFieldValueChange(event){
        console.log("MainCard -- HandleTextFieldValueChange");
        this.state.BoardName = event.target.value;
        this.setState({BoardName: this.state.BoardName});
    }

    HandleCreateBoardName(flagCreateOrNot){
        console.log("MainCard -- HandleCreateBoardName");
        if(flagCreateOrNot) {
            let boardNameTemp = this.state.BoardName;
            if (boardNameTemp === "") {
                alert("Board Name Can't be Empty!");
                return;
            }
            let TempBoardNameList = this.state.BoardNameList;
            TempBoardNameList.push(this.state.BoardName);
            this.state.BoardName = "";
            this.setState({BoardName: this.state.BoardName});
            this.setState({BoardNameList: TempBoardNameList});
        }
    }

    render(){
        console.log("MainCard -- render");
              return(
              <div>
                  <strong> Trello App </strong>
                  <div className="card">

                      <div className="card-header">
                          <b>Personal Boards</b>
                      </div>

                      <div className="card-body">
                          How to Use Trello for Android
                          <DisplayBoardNameList NameList={this.state.BoardNameList}/>
                      </div>

                      <div className="card-footer" style={{height:50}}>
                          <DialogExampleSimple TextFieldValue={this.props.BoardName}
                                               OnTextFieldValueChange={this.HandleTextFieldValueChange}
                                               OnBoardNameCreation={this.HandleCreateBoardName}
                          />
                      </div>

                  </div>
              </div>
              );
    }
}

export default MainCard;