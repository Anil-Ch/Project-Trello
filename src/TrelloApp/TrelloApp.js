import React from 'react';
import MainCard from './MainCard';
import "bootstrap/dist/css/bootstrap.min.css";

class TrelloApp extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row" style={{marginTop:20}}>
                    <div className="col-md-offset-2 col-md-8">
                        <MainCard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrelloApp;