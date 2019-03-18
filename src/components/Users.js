import React, { Component } from "react";
import UserItem from "./UserItem";
import Loader from './HOC/Loader';
import Search from './HOC/Search';

class Users extends Component {
  filterSearch = searchTerm => user =>
    `${user.name}`
      .toUpperCase()
      .indexOf(searchTerm.toUpperCase()) >= 0;
  render() {
    const { users } = this.props;
    const searchTerm = this.props.searchTerm;
    const filterData = users.filter(this.filterSearch(searchTerm));
    return (
      <div className="feed">
        <UserItem users={filterData} />
      </div>
    );
  }
}

export default Search(Loader("users")(Users));