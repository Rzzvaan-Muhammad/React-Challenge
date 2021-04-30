import React from "react";
import UserCard from "./UserCard";

function Users({ handleDetails, newArray }) {
  return (
    <div className="is-scrollable-list">
      {newArray
        ? newArray.map((item) => (
            <UserCard key={item.id} handleDetails={handleDetails} item={item} />
          ))
        : "Users list undefined..."}
    </div>
  );
}

export default Users;
