export const fetchComments = (productId) => ($.ajax({
    method: "GET",
    url:    `/api/products/${productId}/comments`
  })
);

export const createComment = (comment) => ($.ajax({
    method: "POST",
    url:    `/api/comments`,
    data:    comment
  })
);
