import React from "react";
import UserList from "../UserList";

function TutorialUser({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function TutorialUserlist ({users}){
    return(
        <div>
            {users.map(user => {
                    {/* react 에서 배열을 렌더링할려면 key 라는 props 가 있어야함 */ }
                    return <TutorialUser user = {user} key={user.id} />
                })}
        </div>
    );

}

export default TutorialUserlist;