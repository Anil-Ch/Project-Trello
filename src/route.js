import  React from 'react';
import  {Route, IndexRoute } from 'react-router-dom';
import  MyTrelloApp from './TrelloApp/MainCard';
import CreatedBoardOption from './TrelloApp/'

export default (
    <Route path="/" component={MyTrelloApp} >
        <IndexRoute component={MyTrelloApp}/>
        <Route path="createdboardoption" component={CreatedBoardOption}/>
    </Route>
);
