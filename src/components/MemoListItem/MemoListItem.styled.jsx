import styled from "styled-components";

export const Wrapper = styled.li`
  height: 56px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.isSelected ? "rgb(255, 224, 127)" : "rgb(255, 255, 255);"};
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
`;

export const Title = styled.h6`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-size: 12px;
`;

export const UpdatedAt = styled.time``;

export const Content = styled.p`
  margin: 0;
  color: rgb(128, 128, 128);
  font-weight: 300;
`;
