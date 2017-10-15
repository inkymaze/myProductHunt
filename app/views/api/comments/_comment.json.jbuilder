json.extract! comment,
   :id, :hunter_id, :product_id, :body


json.user do
  json.image_url comment.user.image_url
  json.username comment.user.username
end
