import { Textarea, UpdatedAt, Wrapper } from "./MemoEditor.styled";

function MemoEditor() {
  return (
    <Wrapper>
      <header></header>
      <UpdatedAt datetime="">2024년 5월 22일, 오전 10:18</UpdatedAt>
      <Textarea />
    </Wrapper>
  );
}

export default MemoEditor;
