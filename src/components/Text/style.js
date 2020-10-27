import styled, { css } from 'styled-components';

const typeVariants = {
    primary: css`
        color:${(theme) => theme.fontPrimaryColor};
    `,
    secondary: css`
        color:${({ theme }) => theme.fontSecondaryColor};
        opacity:0.7;
    `
}

const sizeVariants = {
    normal: css`
        font-size:${({ theme }) => theme.normal};
        `,
    small: css`
        font-size:${({ theme }) => theme.small};
    `,
    large: css`
        font-size: ${({ theme }) => theme.large}; 
    `,
    medium: css`
        font-size: ${({ theme }) => theme.medium}; 
    `,
}

const StyledText = styled.span`
    ${({ size }) => sizeVariants[size] || sizeVariants.normal};
    ${({ type }) => typeVariants[type]};
    ${({ bold }) => bold && `font-weight:700`};
`;

export default StyledText;