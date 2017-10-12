export const createUpvote = (upvote) => ($.ajax({
    method:   "POST",
    url:      "/api/upvotes",
    data:     upvote
  })
);
