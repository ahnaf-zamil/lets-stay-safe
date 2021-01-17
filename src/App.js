import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import SafetyGuidelines from './pages/SafetyGuidelines';

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/safety-info" component={SafetyGuidelines} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
};

export default App;
