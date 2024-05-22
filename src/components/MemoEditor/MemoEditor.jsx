import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_MEMO } from "../../redux/reducers/memo.reducer";
import { formatDateTime } from "../../utils/formatDateTime";
import { Textarea, UpdatedAt, Wrapper } from "./MemoEditor.styled";

function MemoEditor() {
  const dispatch = useDispatch();
  const textareaRef = useRef();
  const selectedMemoId = useSelector((state) => state.memo.selectedMemoId);
  const memos = useSelector((state) => state.memo.memos);
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);
  const updatedAt = formatDateTime(selectedMemo?.updatedAt, "long");

  useEffect(() => {
    if (textareaRef.current) {
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
      <UpdatedAt dateTime={selectedMemo.updatedAt}>{updatedAt}</UpdatedAt>
      <Textarea autoFocus ref={textareaRef} onChange={handleChange} />
    </Wrapper>
  );
}

export default MemoEditor;
