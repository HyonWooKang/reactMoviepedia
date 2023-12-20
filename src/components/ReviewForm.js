import { useState } from "react";

function ReviewForm() {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form>
      <input value={title} onChange={handleTitleChange}></input>
    </form>
  );
}
// react에서는 값이 변할 때마다 onChange를 사용하는데 이는 js와 다르다 (=onInput  )
export default ReviewForm;
