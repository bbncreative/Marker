import React from 'react';
import { Button } from 'antd';
import Explore from './Explore';
import Results from './Results';
import Filter from './Filter';
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
      filter: 0,
    };
  }

  setTab = tab => this.setState({ tab });

  showResults = () => {
    this.setState({
      showResults: true,
    });
  };

  clearResults = () => {
    this.setState({ showResults: false });
  };

  setFilter = (val) => {
    this.setState({ filter: val });
  }

  render() {
    const { filter, tab, showResults } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h4>Marker</h4>
        </header>
        <nav className="Nav">
          <Button.Group>
            <Button
              type={tab === TABS.HOME ? 'primary' : 'default'}
              onClick={() => this.setTab(TABS.HOME)}
            >
              Home
            </Button>
            <Button
              type={tab === TABS.EXPLORE ? 'primary' : 'default'}
              onClick={() => this.setTab(TABS.EXPLORE)}
            >
              Explore
            </Button>
          </Button.Group>
        </nav>
        <main className="Main">
          {tab === TABS.EXPLORE ? (
            <Explore />
          ) : showResults === true ? (
            <Results reset={this.clearResults} filter={filter} />
          ) : (
            <Filter getResults={this.showResults} setFilter={this.setFilter} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
