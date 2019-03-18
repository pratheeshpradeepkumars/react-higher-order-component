import React from "react";

const UserItem = ({ users }) => {
  return (
    <div className="container">
      { users.length > 0 ?
        users.map(user => (
        <div key={user.name} className="user">
          <p>{user.name}</p>
          <i>{user.url}</i>
        </div> 
      )) : <p>No user records found</p>
      }
    </div>
  );
};

export default UserItem;