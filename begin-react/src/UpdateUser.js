import React from 'react';

function UpdateUser( {onUpdate} ){
    return (
        <button
            onClick={onUpdate}
        >
                수정
        </button>
    );
}

export default UpdateUser;