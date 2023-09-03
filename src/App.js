// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* Add routes for History Page and Word Details Page */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
