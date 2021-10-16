import React, { useRef, useState } from 'react';
import './App.css'
import CreateUser from './CreateUser';
import UserList from './UserList';
function App(){
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username,  email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'leesky',
        email: 'test1@gmail.com'
    },
    {
        id: 2,
        username: 'leesky2',
        email: 'test2@gmail.com'
    },
    {
        id: 3,
        username: 'leesky3',
        email: 'test3@gmail.com'
    },
  ])



  const nextId = useRef(4);
 //current value is 4


  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);


    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}      
      />
      <UserList users={users} onRemove={onRemove}/>
    </div>
  );

}

export default App;