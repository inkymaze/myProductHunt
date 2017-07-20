json.partial! '/api/products/product', product: @product
json.hunter @product.user.username
json.hunter_image @product.user.image_url
