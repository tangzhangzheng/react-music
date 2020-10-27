import styled from 'styled-components';



const StyledInput = styled.input`
   padding:0;
    width: 100%;
    height:35px;
    border:none;
    font-size:${({ theme }) => theme.small};
    display:block;
    outline:none;
    border-radius:4px;
    &::placeholder{
        color:${({ theme }) => theme.gray2};
        font-size:${({ theme }) => theme.small};
        
    }
`;



const Suffix = styled.div`
     display: flex;
     justify-self:center;
     align-self: center;
     margin-top:3px;
     

`;

const InputContainer = styled.div`
    display: flex;
    width:220px;
    z-index:5;
    align-items: center;
    box-sizing:border-box;
    border:1px solid ${({ theme }) => theme.gray3};
    border-radius:4px;
    padding:0 5px 0 8px;
    &:hover{
            color:${({ theme }) => theme.primaryColor};
        }
`;


export default StyledInput;
export { Suffix, InputContainer }