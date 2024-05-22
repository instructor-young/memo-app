import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_NEW_MEMO,
  DELETE_MEMO,
} from "../../redux/reducers/memo.reducer";
import MemoListItem from "../MemoListItem";
import { Button, Header, List, Wrapper } from "./MemoList.styled";

function MemoList() {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo.memos);

  const handleClickCreateNewMemo = () => {
    const action = { type: CREATE_NEW_MEMO };
    dispatch(action);
  };
  const handleClickDeleteSelectedMemo = () => {
    if (memos.length === 1)
      return alert("하나 이상의 메모는 남겨두어야 합니다.");

    const action = { type: DELETE_MEMO };
    dispatch(action);
  };

  const sortedMemos = useMemo(
    () => [...memos].sort((memoA, memoB) => memoB.updatedAt - memoA.updatedAt),
    [memos]
  );

  return (
    <Wrapper>
      <Header>
        <Button onClick={handleClickCreateNewMemo}>새 메모 작성하기</Button>
        <Button onClick={handleClickDeleteSelectedMemo}>삭제</Button>
      </Header>
      <List>
        {sortedMemos.map((memo) => (
          <MemoListItem key={memo.id} memo={memo} />
        ))}
      </List>
    </Wrapper>
  );
}

export default MemoList;
