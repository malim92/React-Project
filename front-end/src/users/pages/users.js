import React from "react";
import UsersList from "../components/UsersList";


const Users = () => {

    const USERS = [{id:'u1', name:"Ali", img:'Ali-Almazawi photo.jpg', places:3}];

    return <UsersList items={USERS}></UsersList>;
};

export default Users;