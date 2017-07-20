export const selectAllProducts = ({ products }) =>
 Object.keys(products).map(id => products[id]);
