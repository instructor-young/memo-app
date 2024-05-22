const initialMemoId = crypto.randomUUID();
const initialState = {
  memos: [
    {
      id: initialMemoId,
      content: "",
      updatedAt: Date.now(),
    },
  ],
  selectedMemoId: initialMemoId,
};

export const CREATE_NEW_MEMO = "memo/CREATE_NEW_MEMO";
export const UPDATE_MEMO = "memo/UPDATE_MEMO";
export const SELECT_MEMO = "memo/SELECT_MEMO";
export const DELETE_MEMO = "memo/DELETE_MEMO";

const memoReducer = (prevState = initialState, action) => {
  let nextState = { ...prevState };

  switch (action.type) {
    case CREATE_NEW_MEMO:
      const newMemo = {
        id: crypto.randomUUID(),
        content: "",
        updatedAt: Date.now(),
      };

      return {
        ...prevState,
        selectedMemoId: newMemo.id,
        memos: [...prevState.memos, newMemo],
      };

    case UPDATE_MEMO:
      return {
        ...prevState,
        memos: prevState.memos.map((memo) =>
          memo.id === action.payload.memoId
            ? { ...memo, content: action.payload.content }
            : memo
        ),
      };

    case SELECT_MEMO:
      return {
        ...prevState,
        selectedMemoId: action.payload.memoId,
      };

    case DELETE_MEMO:
      const memoIdToDelete = prevState.selectedMemoId;
      const memoToSelect = prevState.memos
        .filter((memo) => memo.id !== memoIdToDelete)
        .reduce(
          (prevMemo, currentMemo) =>
            currentMemo.updatedAt - prevMemo.updatedAt > 0
              ? currentMemo
              : prevMemo,
          { updatedAt: 0 }
        );
      console.log("memoToSelect", memoToSelect);

      return {
        selectedMemoId: memoToSelect.id,
        memos: prevState.memos.filter((memo) => memo.id !== memoIdToDelete),
      };
    default:
      return nextState;
  }
};

export default memoReducer;
