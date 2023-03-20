import React from "react";
import Profile from "./Profile";

const UserDirectory = ( {users} ) => {
    const userArray = users.map((user, i) => {
        return (
            <Profile 
                
                firstname={users[i].firstname} 
                lastname={users[i].lastname} 
                position={users[i].position} 
                company={users[i].company}
            />
        ) 
    })

    return (
        <div>
            { userArray }
        </div>
    );
}

export default UserDirectory;