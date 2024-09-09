import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RuleContainer>
        <div className='text'>
            <h2>How to play dice game</h2>
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. After clicking on the dice, if the selected number is equal to dice number, you will get the same point as dice{" "} </p>
            <p>4. If you get the wrong guess then 2 point will be deducted.</p>
        </div>
    </RuleContainer>
  )
};

export default Rules;

const RuleContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding:20px;
margin-top: 20px;
border-radius: 10px;
align-items: center;

h2 {
    font-size: 24px;
};

.text {
    font-size: 20px;
    max-width: 1000px;
}`;