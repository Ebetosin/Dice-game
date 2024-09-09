import React from 'react';
import styled from 'styled-components';

const RollDice = ({roleDice, currentDice}) => {

    
  return (
    <RollDiceSection>
        <div className='dice_image'
        onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt='dice' />
        </div>
        <p>Click on Dice to roll</p>
    </RollDiceSection>
  )
}

export default RollDice;

const RollDiceSection = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;

.dice_image {
    cursor: pointer;
}

p {
    font-size: 24px;
}
`;