//use state 사용하기
import React, { useState } from "react";

function TutorialCounter(){
    const [number ,setNumber] = useState(0);

    const onClickAdd = () => {
        setNumber(prev => prev + 1);
    }
    const onClickMinus = () => {
        setNumber(prev => prev - 1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onClickAdd}>+1</button>
            <button onClick={onClickMinus}>-1</button>
        </div>
    );
}


export default TutorialCounter;