import React, { useMemo, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import CountUser from './CountUser';


function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action){
  switch (action.type){
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user),
      };
    case  'TOGGLE_USER':
      return {
        users: state.users.map(user => 
          user.id === action.id ? { ...user, active: !user.active } : user  
        )
      };
    case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

 //  useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을때,
 //  useMemo은 특정 값을 재사용하고 싶을 떄,
 
 //  useCallback
 /*
      1. useCallback(() => {}, [deps])
      2. 함수 본문안에 state나 props 가 있으면, deps에 작성
 */

  const count = useMemo(() => countActiveUsers(users), [users]);
  // useMemo => deps의 변경을 감지하면 useMemo 에 등록되어 있는  함수(countActiveusers(users)) 호출해서 값을 다시 저장 
  // 그게 아니라면 App 컴포넌트 렌더링 시 함수를 다시 호출하는게 아닌 기존 값을 재사용 => 캐싱 효과
  
  return (
    <UserDispatch.Provider value = {dispatch}>
      <CreateUser
      />
      <UserList users={users} />
      <CountUser count = {count}/>
    </UserDispatch.Provider>
  );
}

export default App;
