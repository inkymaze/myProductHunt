
export const getUser = (id) => ($.ajax({
    method: "GET",
    url:  `api/users/${id}`
  })
);

export const updateUser = (user) => ($.ajax({
    method: "PATCH",
    url: `/api/users/${user.user.id}`,
    data: user
  })
);
