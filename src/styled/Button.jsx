import styled from "styled-components";

export const Button = styled.button`
background: #000000;
color: white;
padding: 10px 18px;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor: pointer;
margin-left:270px;

&:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
} 
`;

export const OutlineButton = styled(Button)`
background: #000000;
color: white;
border: 1px solid black;

&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
} 
`; 