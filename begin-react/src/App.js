import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

import './App.css'
function App(){
  return (
    <>
      <Wrapper>
        <Hello name="leesky1" color="aqua"/>
        <Hello name="leesky1" color="skyblue"/>
      </Wrapper>
    </>
  );

}

export default App;
