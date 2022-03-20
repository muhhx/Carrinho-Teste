import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    border-bottom: solid 1px ${({ theme }) => theme.secundary};
    padding: 10px 0px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.primary};
    text-align: center;
    padding: 0px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionWapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
`;

export const Button = styled.button`
    background-color: ${( props ) => props.isSelected === true ? "#3b74f2" : ({ theme }) => theme.secundary};
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 1.2rem;
    padding: 5px 25px;
    height: 22px;
    font-weight: ${( props ) => props.isSelected === true ? "700" : "300"};
    cursor: pointer;
`;

export const Switch = styled.button`
    background-color: #3b74f2;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 5px 25px;
    height: 22px;
    cursor: pointer;
    transition: ease-out .2s;

    &:hover {
        background-color: #3060ca;
    }
`;

export const SwitchIcon = styled.img`
    height: 100%;
`;