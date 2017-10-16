# @products.each do |product|
#   json.set! product.id do
#     json.partial! 'product', product: product
#   end
# end


json.array! @products do |product|
  json.partial! 'api/products/product', product: product
end
