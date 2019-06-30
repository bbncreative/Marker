import React from 'react';
import { Button } from 'antd';
import Explore from './Explore';
import Results from './Results';
import './App.css';

const TABS = {
  HOME: 'home',
  EXPLORE: 'explore',
  RESULTS: 'results',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: TABS.HOME,
      showResults: false,
    };
  }

  setTab = tab => this.setState({ tab });

  showResults = () => {
    this.setState({ showResults: true });
  };

  clearResults = () => {
    this.setState({ showResults: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Marker</h4>
        </header>
        <nav>
          <ul>
            <li>
              <span onClick={() => this.setTab(TABS.HOME)}>Home</span>
            </li>
            <li>
              <span onClick={() => this.setTab(TABS.EXPLORE)}>Explore</span>
            </li>
          </ul>
        </nav>
        {this.state.tab === TABS.EXPLORE ? (
          <Explore />
        ) : this.state.showResults === true ? (
          <Results reset={this.clearResults} />
        ) : (
          <Button onClick={this.showResults}>Show Results</Button>
        )}
      </div>
    );
  }
}

export default App;
