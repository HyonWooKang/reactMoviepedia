import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, initialPreview, onChange }) {
  // const [value, setValue] = useState();
  const [preview, setPreview] = useState(initialPreview); // 미리보기
  const inputRef = useRef(); // 사진 초기화용 // null check 하여 사용하기

  // 파일 등록
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  // 파일 초기화
  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null); // 이미지 파일의 value가 null로 처리됨
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value); // 이미지를 메모리에 할
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview); // prev 상태를 빈 값으로 처리
      URL.revokeObjectURL(nextPreview); // 앞에 생성한 ObjectURL 해제
    };
  }, [value, initialPreview]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}
// input file은 비제어 input으로 value를 바인딩 하면 안 됨 (value={value} => error 발생)
// js로 file의 값(값, 경로 등)을 바꿀 수 없음 (보안적이 이유)

export default FileInput;
