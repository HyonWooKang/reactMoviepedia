import Rating from "./Rating";

function ReviewListItem({ item, onDelete }) {
  const handleDelete = () => onDelete(item.id);

  return (
    <div className="ReviewList">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{item.createdAt}</p>
        <p>{item.content}</p>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
}

// 배열 랜더링 할 때 키 값(item.id) 지정하기
// 배열의 인덱스는 구성 후 부여되기 때문에 키 값으로 사용할 수 없다 => 리뷰 등을 매칭 시킬 때 필요함
function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
