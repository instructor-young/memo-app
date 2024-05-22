import {
  Content,
  Details,
  Title,
  UpdatedAt,
  Wrapper,
} from "./MemoListItem.styled";

function MemoListItem() {
  return (
    <Wrapper isSelected={false}>
      <Title>새로운 메모를 작성해 보아요</Title>
      <Details>
        <UpdatedAt>오전 10:18</UpdatedAt>
        <Content>이것은 메모에요</Content>
      </Details>
    </Wrapper>
  );
}

export default MemoListItem;
