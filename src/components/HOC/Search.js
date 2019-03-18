import React from "react";

const Search = WrappedComponent => {
  return class extends React.Component {
    state = {
      searchTerm: ""
    };
    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      const color = this.props.color;
      return (
        <div>
          <div style={{ background: color, padding: "2px" }}>
            <input
              type="text"
              onChange={this.handleSearch}
              value={this.state.searchTerm}
              placeholder={this.props.placeholder}
            />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm}{...this.props}/>
        </div>
      );
      return super.render();
    }
  };
};

export default Search;