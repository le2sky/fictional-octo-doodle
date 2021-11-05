import React, {useState, useRef} from "react";
//react는 props 변경, state 변경시 렌더링 됨
//onChange 걸어놔서 인풋에 변화가 감지될떄마다. => e.target.value = state 니깐 계속 렌더링 되는거임

function TutorialInput() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    
    const nameInput = useRef();
    //useRef를 통해서 특정 DOM을 select 하기
      // 1. useRef를 사용 ref객체를 만들기 => 이 객체를 우리가 선택하고 싶은 DOM에 ref 값으로 설정하면, 
      // 2. ref 객체의 .current 값은 이 객체로 ref 값을 설정한 DOM을 가르키게 된다.


    const { name, nickname } = inputs;
   //렌더링 될떄마다 네임이랑 닉네임을 state에서 최신화 시킴
    console.log('렌더링됨')
    const onChange = (e) => {
        const { value, name } = e.target;
        //e.target에 value와 name이 설정되어 있으니깐 객체에서 비구조화 할당
        setInputs({
            ...inputs,
            [name]: value
            //name key를 가진 항목을 value 로 설정, inputs이란 객체를 전개문법을 통해서 할당 후 
        })
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
        <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput}/>
        <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname} />
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
        </div>
    );
}

export default TutorialInput;