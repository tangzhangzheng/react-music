import styled from 'styled-components';


const StyledButton = styled.button`
    width: 100px;
    height:30px;
    color: black;
    border-radius:15px;
    background-color:${({ theme }) => theme.primaryColor};   

`;

export default StyledButton;