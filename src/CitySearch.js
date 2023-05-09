import React, { Component } from 'react';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
      }

      handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({showSuggestions:true});
        console.log(this.props.locations);

        const suggestions = this.props.locations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
          query: value,
          suggestions,
        });
      };

      handleItemClicked = (suggestions) => {
        this.setState({
          query: suggestions,
          showSuggestions: false
        });
        console.log(this.props.locations);
        this.props.updateEvents(suggestions);
      }

  render() {
    return (
      <div className="CitySearch">
        <input
        type="text"
        className="city"
        value={this.state.query}
        onChange={this.handleInputChanged}
        onFocus={() => { this.setState({ showSuggestions: true })
      }}
      />
      <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
      {this.state.suggestions.map((suggestions) => (
       <li
      key={suggestions}
      onClick={() => this.handleItemClicked(suggestions)}
    >{suggestions}</li>
  ))}
  <li onClick={() => this.handleItemClicked("all")}>
  <b>See all cities</b>
</li>
      </ul>
      </div>
    );
  }
}


export default CitySearch;