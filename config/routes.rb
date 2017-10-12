Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :products, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :search, only: [:index]
    resources :upvotes, only: [:create]
  end

  root "static_pages#root"
end
