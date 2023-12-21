import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewForm from "./ReviewForm";

const LIMIT = 6;

function App() {
  const [items, setItems] = useState([]); // 정렬 전 상태
  const [order, setOrder] = useState("createdAt"); // 정렬
  const [offset, setOffset] = useState(0); // 페이징
  const [hasNext, setHasNext] = useState(false); // 페이징
  const [isLoading, setIsLoading] = useState(false); // 로딩
  const [loadingError, setLoadingError] = useState(null); // 에러 예외처리

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  // 정렬
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  // 삭제 (필터 사용)
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
      // 더보기 누고 통신이 느릴 때  삭제 하면 삭제된 코드가 다시 살아나는 것을 방지하기 위해 callBack으로 처리 지정하여 처리함
      // prevItems는 리액트가 현재 시점의 아이템 값을 전달 해 줌
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  // 랜더링 이후 [] 안의 값이 바뀔 때마다 콜백 함수를 실행함 (dependency list([])도 기억함)
  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm />
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
