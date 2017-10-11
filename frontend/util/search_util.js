export const searchProducts = (query) => ($.ajax({
    method: "GET",
    url: "/api/searches",
    data: query
  })
);
