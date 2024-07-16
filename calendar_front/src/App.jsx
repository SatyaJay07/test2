import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/calendar';
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Calendar} />
        <Route path="/events/:date" component={EventsPage} />
      </Switch>
    </div>
  );
}

export default App;
