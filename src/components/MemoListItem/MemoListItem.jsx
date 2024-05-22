import { useDispatch, useSelector } from "react-redux";
import { SELECT_MEMO } from "../../redux/reducers/memo.reducer";
import { formatDateTime } from "../../utils/formatDateTime";
import { Title, UpdatedAt, Wrapper } from "./MemoListItem.styled";

function MemoListItem({ memo }) {
  const dispatch = useDispatch();
  const selectedMemoId = useSelector((state) => state.memo.selectedMemoId);
  const title = getTitle(memo.content);
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

function getTitle(title) {
  return title.trim().length > 0
    ? title.trim().length < 14
      ? title.trim().slice(0, 14)
      : title.trim().slice(0, 14) + "..."
    : "새로운 메모";
}

export default MemoListItem;
