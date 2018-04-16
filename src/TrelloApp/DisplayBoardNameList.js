import React from 'react';
import CreatedBoardOption from './CreatedBoardOption';

class DisplayBoardNameList  extends React.Component{
    constructor(props){
        super(props);
        this.state = {showComponent: false, BoardName: []};
        this._onButtonClick = this._onButtonClick.bind(this);
       }

    _onButtonClick(event){
        this.state.BoardName.push(event.target.value);
        this.setState({BoardName: this.state.BoardName})
        this.setState({showComponent: true});
       }

    render() {
        return (
            <div>
                <ul type="none">
                    {this.props.NameList.map((name, index) => <li style={{marginTop: 4}} key={index}>
                       <button type="button" className="btn btn-success" value={name} onClick={this._onButtonClick}>{name}</button>
                        {
                            (this.state.showComponent && (this.state.BoardName.indexOf(name) >= 0))?
                                 <CreatedBoardOption BoardId={name+index} /> :
                                    null
                        }
                    </li>)}
                </ul>
            </div>
        );
    }
};


export default DisplayBoardNameList;