import React, {useContext, useRef} from 'react';
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';

function CreateUser(){
    const nextId = useRef(4);
    const dispatch = useContext(UserDispatch);
    const [{username, email}, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    return(
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={
                () => {
                    const user = {
                        username,
                        email,
                        id: nextId.current
                    };
                    dispatch({
                        type: "CREATE_USER",
                        user,
                    });
                    nextId.current+=1;
                    reset();
                }

            }>등록</button>
        </div>
    );
}
export default React.memo(CreateUser);
