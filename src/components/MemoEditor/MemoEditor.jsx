import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_MEMO } from "../../redux/reducers/memo.reducer";
import { Textarea, UpdatedAt, Wrapper } from "./MemoEditor.styled";

function MemoEditor() {
  const dispatch = useDispatch();
  const textareaRef = useRef();
  const selectedMemoId = useSelector((state) => state.memo.selectedMemoId);
  const memos = useSelector((state) => state.memo.memos);
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);
  const updatedAt = selectedMemo
    ? new Date(selectedMemo.updatedAt)
    : new Date();
  const isAfterNoon = updatedAt.getHours() >= 12;
  const dateTime = `${updatedAt.getFullYear()}년 ${
    updatedAt.getMonth() + 1
  }월 ${updatedAt.getDate()}일, ${
    isAfterNoon ? "오후" : "오전"
  } ${updatedAt.getHours()}:${updatedAt.getMinutes()}`;

  useEffect(() => {
    if (textareaRef.current) {
      console.log(selectedMemo, selectedMemoId);
      textareaRef.current.focus();
      textareaRef.current.value = selectedMemo?.content || "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMemoId]);

  const handleChange = (e) => {
    const content = e.target.value;
    const action = {
      type: UPDATE_MEMO,
      payload: { memoId: selectedMemoId, content },
    };
    dispatch(action);
  };

  return (
    <Wrapper>
      <UpdatedAt dateTime={updatedAt.toISOString()}>{dateTime}</UpdatedAt>
      <Textarea autoFocus ref={textareaRef} onChange={handleChange} />
    </Wrapper>
  );
}

export default MemoEditor;
