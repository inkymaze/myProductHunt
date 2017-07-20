@products.each do |product|
  json.set! product.id do
    json.partial! 'product', product: product
    json.hunter product.user.username
    json.hunter_image product.user.image_url
  end
end
