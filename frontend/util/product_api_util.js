export const fetchProducts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/products'
  })
);

export const fetchProduct = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${id}`
  })
);

export const createProduct = data => (
  $.ajax({
    method: 'POST',
    url: '/api/products',
    data: {product:data}
  })
);

export const fetchUserProducts = (userId) => (
  $.ajax({
    method: "GET",
    url:  `/api/users/${userId}/products`
  })
);

export const updateProduct = product => (
  $.ajax({
    method: 'PATCH',
    url: `/api/products/${product.id}`,
    data: { product }
  })
);
