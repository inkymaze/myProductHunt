@products.each do |product|
  json.set! product do
    json.partial! 'product', product: product
    
  end
end
