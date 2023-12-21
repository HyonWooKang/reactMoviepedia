import { useState } from "react";
import "../assets/css/ReviewForm.css";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // 활용법 확인해보기
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // html form 태그의 submit은 기본적으로 form의 값과 함께 get request를 보내는 것이라 새로고침됨
    e.preventDefault(); // 따라서 여기서는 이 기본 기능을 막고 console에 출력하도록 처리함
    console.log({ values });
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange}></input>
      <input
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}
// react에서는 값이 변할 때마다 onChange를 사용하는데 이는 js와 다르다 (=onInput)
export default ReviewForm;
