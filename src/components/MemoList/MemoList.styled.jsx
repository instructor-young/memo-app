import styled from "styled-components";

export const Wrapper = styled.aside`
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 12px 16px;
  position: sticky;
  top: 0;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
`;

export const Button = styled.button`
  all: unset;
  font-size: 13px;
  font-weight: 500;
  transition: all 120ms;
  padding: 4px 8px;
  background-color: rgb(255, 255, 255);
  color: rgb(128, 128, 128);
  &:hover {
    color: rgb(18, 18, 18);
    font-weight: 600;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0;
  overflow-x: hidden;
`;
