import { useDispatch, useSelector } from "react-redux";
import { SELECT_MEMO } from "../../redux/reducers/memo.reducer";
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
  const isAfterNoon = new Date(memo.updatedAt).getHours() >= 12;
  const updatedAt = `${isAfterNoon ? "오후" : "오전"} ${new Date(
    memo.updatedAt
  ).getHours()}:${String(new Date(memo.updatedAt).getMinutes()).padStart(
    2,
    "0"
  )}`;

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
