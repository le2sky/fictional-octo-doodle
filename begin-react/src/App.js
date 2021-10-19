import React, { useRef, useState, useMemo, useCallback } from 'react';
import './App.css'
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App(){
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username,  email } = inputs;

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs(inputs => ({
        ...inputs,
        [name]: value
      }));
    },[]
  )

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'leesky',
        email: 'test1@gmail.com',
        active: true,
    },
    {
        id: 2,
        username: 'leesky2',
        email: 'test2@gmail.com',
        active: false,
    },
    {
        id: 3,
        username: 'leesky3',
        email: 'test3@gmail.com',
        active: false,
      },
  ])



  const nextId = useRef(4);
 //current value is 4
  //const seletedId = useRef(1);

  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username,
        email
      };
      setUsers(() => [...users, user]);
  
  
      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    }, [username, email]
  )

  const onRemove = useCallback(
    id => {
      setUsers(users => users.filter(user => user.id !== id))
    },[]
  )

  const onToggle = useCallback(
    id => {
      setUsers( users => 
        users.map(user => 
          user.id === id ? {...user, active : !user.active } : user
        )
      )
    }, []
  )

//  const onUpdate = () => {
//     if(window.confirm(`정말 ${users[seletedId.current-1].username}을 수정하시겠습니까?`)){
//       const nametemp = prompt('새로운 이름을 입력해주세요!');
//       let emailtemp = null;
//       if(window.confirm(`이메일을 수정하시겠습니까?`)){
//           emailtemp = prompt('새로운 이메일을 입력해주세요!');
//       }
//       setUsers(
//         users.map(user => {
//           if(user.id === seletedId.current){
//             return {
//               ...user,
//               username: nametemp,
//               email: emailtemp ?? user.email
//             }
//           } else return user;
//         })
//       )
//     }
//   }

  const count = useMemo(() => countActiveUsers(users), [users]);


  return (
    <>
      <div>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}      
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      </div>
      <div>활성 사용자 수: {count}</div>
    </>
  );

}

export default App;