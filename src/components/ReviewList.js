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

function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
