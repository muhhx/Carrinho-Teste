import styled from "styled-components";

export const Background = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.pageBackground};
`;

export const Container = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.cartBackground};
    border-radius: 10px;

    @media only screen and (max-width: 400px) {
        height: 100vh;
        border-radius: initial;
    }   
`;