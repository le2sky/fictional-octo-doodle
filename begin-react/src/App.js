import React, { useRef, useState } from 'react';
import './App.css'
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
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
  const seletedId = useRef(1);

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


  const onToggle = id => {
      setUsers(
        users.map(user => {
          if(user.id !== id) return { ...user, active: false};
          return {...user, active: true};
        })
      )
      seletedId.current = id;
  }

 const onUpdate = () => {
    if(window.confirm(`정말 ${users[seletedId.current-1].username}을 수정하시겠습니까?`)){
      const nametemp = prompt('새로운 이름을 입력해주세요!');
      let emailtemp = null;
      if(window.confirm(`이메일을 수정하시겠습니까?`)){
          emailtemp = prompt('새로운 이메일을 입력해주세요!');
      }
      setUsers(
        users.map(user => {
          if(user.id === seletedId.current){
            return {
              ...user,
              username: nametemp,
              email: emailtemp ?? user.email
            }
          } else return user;
        })
      )
    }
  }
  return (
    <div>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}      
      />
      <UpdateUser 
        onUpdate={onUpdate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );

}

export default App;