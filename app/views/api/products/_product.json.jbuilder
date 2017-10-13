json.extract! product,
   :id, :name, :description,
   :image_url, :product_URL, :hunter_id, :image_two_url,
   :image_three_url, :image_four_url, :image_five_url

json.upvotes product.upvotes.count
json.comments product.comment_ids
