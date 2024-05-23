import { useState, useEffect } from 'react';
import User from './User';

function Users(){
    const [users, setUsers] = useState([]);
    useEffect(function(){
        const getUsers = async function(){
            const res = await fetch("http://localhost:3001/users");
            const data = await res.json();
            setUsers(data);
        }
        getUsers();
    }, []);

    return(
        <div>
            <h3>Users:</h3>
            <ul>
                {users.map(user=>(<User user={user} key={user._id}></User>))}
            </ul>
        </div>
    );
}

export default Users;