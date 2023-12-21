import { useState } from "react";
import "../assets/css/ReviewForm.css";

function ReviewForm() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    // html form 태그의 submit은 기본적으로 form의 값과 함께 get request를 보내는 것이라 새로고침됨
    e.preventDefault(); // 따라서 여기서는 이 기본 기능을 막고 console에 출력하도록 처리함
    console.log({ title, rating, content });
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange}></input>
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button type="submit">확인</button>
    </form>
  );
}
// react에서는 값이 변할 때마다 onChange를 사용하는데 이는 js와 다르다 (=onInput)
export default ReviewForm;
