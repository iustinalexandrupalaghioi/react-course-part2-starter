import React from "react";
import usePosts, { Post } from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Is Loading...</p>;

  return (
    <>
      {console.log(data)}
      <div className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.pages.map((post) =>
              post.map((content) => (
                <li key={content.id} className="list-group-item">
                  {content.title}
                </li>
              ))
            )}
          </React.Fragment>
        ))}
      </div>
      <button
        className="btn btn-primary my-2"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
