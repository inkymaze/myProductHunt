
export const fetchProducts = data => (
  $.ajax({
    method: 'GET',
    url: '/api/products',
    data
  })
);


export const fetchProduct = id => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${id}`
  })
);

export const createProduct = data => (
  $.ajax({
    method: 'POST',
    url: '/api/products',
    data
  })
);


export const updateProduct = product => (
  $.ajax({
    method: 'PATCH',
    url: `/api/products/${product.id}`,
    data: { product }
  })
);
