import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Items = styled.div`
    width: 100%;
    max-height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 20px 20px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow-y: scroll;

    @media only screen and (max-width: 400px) {
        max-height: none;
        gap: 40px;
    }   
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-top: solid 1px ${({ theme }) => theme.secundary};
    border-bottom: solid 1px ${({ theme }) => theme.secundary};
    padding: 20px 20px;
`;

export const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.primary};
    text-align: center;
`;

export const FreeShipping = styled.div`
    background-color: #c7ffa6;
    color: #297b00;
    border-radius: 20px;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 8px 20px;
`;

export const Checkout = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.cartBackground};
`;

export const CheckoutButton = styled.button`
    background-color: #3b74f2;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.8rem;
    font-weight: 700;
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    word-wrap: break-word;
    cursor: pointer;
    transition: ease-out .2s;

    &:hover {
        background-color: #3060ca;
    }
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;