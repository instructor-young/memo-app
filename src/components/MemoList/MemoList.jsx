import MemoListItem from "../MemoListItem";
import { Button, Header, List, Wrapper } from "./MemoList.styled";

function MemoList() {
  return (
    <Wrapper>
      <Header>
        <Button>새 메모 작성하기</Button>
        <Button>삭제</Button>
      </Header>
      <List>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </List>
    </Wrapper>
  );
}

export default MemoList;
