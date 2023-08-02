import React, { useState } from "react";
import User from "./User";
import UserModal from "./UserModal";
import axios from "axios";

export default function UserList() {
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  function loadApi() {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setUsers(response.data);
    setLoaded(true);
  }

  function handleUserClick(user) {
    setSelectedUser(user);
  }

  function closeModal() {
    setSelectedUser(null);
  }

  if (loaded) {
    return (
      <div className="div">
        {users.map((user, index) => (
          <div className="div" key={index}>
            <User
              user={{ ...user, isSelected: user === selectedUser }}
              onClick={() => handleUserClick(user)}
            />
          </div>
        ))}
        {selectedUser && <UserModal user={selectedUser} onClose={closeModal} />}
      </div>
    );
  } else {
    loadApi();
    return null;
  }
}
