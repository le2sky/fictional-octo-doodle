import React from 'react';

function Hello(props){
    const style = {
        backgroundColor: 'black',
        fontSize: 24,
        color: props.color,
        padding: '1rem',
    };
    const user = {
        name: props.name,
    }
    return <div style={style}>안녕하세요 {user.name}님!</div>
}

Hello.defaultProps = {
    name: 'guest',
}


export default Hello;
