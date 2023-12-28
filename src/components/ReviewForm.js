import { useState } from "react";
import { createReviews } from "../api";
import "../assets/css/ReviewForm.css";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm() {
  const [values, setValues] = useState(INITIAL_VALUES);

  // for uncontrilled input
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // for controlled input
  const handleInputChange = (e) => {
    const { name, value } = e.target; // 활용법 확인해보기
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    // html form 태그의 submit은 기본적으로 form의 값과 함께 get request를 보내는 것이라 새로고침됨
    e.preventDefault(); // 따라서 여기서는 이 기본 기능을 막고 console에 출력하도록 처리함
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);
    await createReviews(formData);
    setValues(INITIAL_VALUES);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        name="title"
        value={values.title}
        onChange={handleInputChange}
      ></input>
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
  // input 태그에 value와 onChange를 붙여 값을 제어하면 제어 컴포넌트(controlled <-> uncontrolled 비제어)
}
// react에서는 값이 변할 때마다 onChange를 사용하는데 이는 js와 다르다 (=onInput)
export default ReviewForm;
