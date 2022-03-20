import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }   
`;

export const Image = styled.div`
    min-height: 90px;
    height: 90px;
    aspect-ratio: 1;
    border: solid 1px ${({ theme }) => theme.secundary};
    background-image: url(${( props ) => props.imageURL});
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: 400px) {
        width: 100%;
    }   
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Name = styled.p`
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    font-size: 1.2rem;
    text-align: start;
`;

export const ListPrice = styled.p`
    color: #bfbfbf;
    font-weight: 500;
`;

export const SellingPrice = styled.p`
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    font-size: 1.2rem;
`;