import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrelloAppStyles.css';

const AddCardButton = (props) => {
    return (
          <div style={{position:"absolute",right:0}}>
          <button type="button" id="addCardbtn" className="btn btn-warning btn-circle btn-lg"><span
              className="glyphicon glyphicon-plus"></span></button>
          </div>
    );
};

export  default AddCardButton;

