Rails.application.routes.draw do

  namespace :api do
    get 'products/create'
  end

  namespace :api do
    get 'products/show'
  end

  namespace :api do
    get 'products/index'
  end

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
