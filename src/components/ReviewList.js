function ReviewListItem({ item, onDelete }) {
  const handleDelete = () => onDelete(item.id);

  return (
    <div className="ReviewList">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{item.createdAt}</p>
        <p>{item.content}</p>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
}

// 배열 랜더링 할 때 키 값(item.id) 지정하기
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
