import { useDispatch, useSelector } from "react-redux";
import { SELECT_MEMO } from "../../redux/reducers/memo.reducer";
import { formatDateTime } from "../../utils/formatDateTime";
import { Title, UpdatedAt, Wrapper } from "./MemoListItem.styled";

function MemoListItem({ memo }) {
  const dispatch = useDispatch();
  const selectedMemoId = useSelector((state) => state.memo.selectedMemoId);
  const title =
    memo.content.trim().length > 0
      ? memo.content.trim().length < 14
        ? memo.content.trim().slice(0, 14)
        : memo.content.trim().slice(0, 14) + "..."
      : "새로운 메모";
  const updatedAt = formatDateTime(memo.updatedAt, "short");

  const handleClick = () => {
    const action = { type: SELECT_MEMO, payload: { memoId: memo.id } };
    dispatch(action);
  };

  return (
    <Wrapper $isSelected={selectedMemoId === memo.id} onClick={handleClick}>
      <Title>{title}</Title>
      <UpdatedAt>{updatedAt}</UpdatedAt>
    </Wrapper>
  );
}

export default MemoListItem;
