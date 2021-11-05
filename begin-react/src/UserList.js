import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

// React.memo(컴포넌트)
/*
    컴포넌트의 props 가 렌더링 되지 않았다면, 리렌더링 방지
*/

const User = React.memo(function User({user}){
    const dispatch = useContext(UserDispatch);

    useEffect(() => {
        //console.log(user);
        return () => {
            //console.log(user)
        }
    }, [user]);
    
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                        dispatch({
                            type: 'TOGGLE_USER',
                            id: user.id
                        })
                    }
                }
            >
                {user.username}
            </b> 
            &nbsp;
            <span>{user.email}</span>
            <button onClick={() => {
                dispatch({
                    type: 'REMOVE_USER',
                    id: user.id
                })
            }
                
            }>삭제</button>
        </div>
    );
});

function UserList({users}){
    return(
        <div>
            {users.map((user) => { 
                return <User user={user} key={user.id}/>
             })}
        </div>
    );    
}

export default React.memo(UserList);
