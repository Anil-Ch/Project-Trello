import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrelloApp from './TrelloApp/TrelloApp';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrelloApp />, document.getElementById('root'));
registerServiceWorker();
