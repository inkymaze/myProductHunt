export const searchProducts = (query) => ($.ajax({
    method: "GET",
    url: "/api/search",
    data: query
  })
);
