import React, { Component } from 'react';
import './App.css';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });

    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    this.setState({
      query: value,
      suggestions,
    });

    if (suggestions.length === 0) {
      this.props.onInputChanged('We cannot find the city you’re looking for. Please try another city.');
    } else {
      this.props.onInputChanged(''); // Reset the info alert text
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div>
        <p className="enter-city">Enter a city:</p>
        <div className="CitySearch">
          <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
          />
          <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>
                {suggestion}
              </li>
            ))}
            <li onClick={() => this.handleItemClicked('all')}>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
