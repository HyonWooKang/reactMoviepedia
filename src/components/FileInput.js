import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  // const [value, setValue] = useState();
  const inputRef = useRef();

  // 랜더링 할 때 한 번 사용
  // useEffect(() => {
  //   // ref 값이 있을지 모르니 예외 처리
  //   if (inputRef.current) {
  //     console.log(inputRef.current);
  //   }
  // }, []);

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return <input type="file" onChange={handleChange} ref={inputRef} />;
}
// input file은 비제어 input으로 value를 바인딩 하면 안 됨 (value={value} => error 발생)
// js로 file의 값(값, 경로 등)을 바꿀 수 없음 (보안적이 이유)

export default FileInput;
