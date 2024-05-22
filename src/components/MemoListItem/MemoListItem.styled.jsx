import styled from "styled-components";

export const Wrapper = styled.li`
  height: 56px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$isSelected ? "rgb(255, 224, 127)" : "rgb(255, 255, 255);"};
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
`;

export const Title = styled.h6`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 2px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
`;

export const UpdatedAt = styled.time`
  font-size: 12px;
  color: rgb(64, 64, 64);
`;
