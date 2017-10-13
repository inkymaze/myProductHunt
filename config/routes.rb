Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :products, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :search, only: [:index]
    resources :upvotes, only: [:create]
    resources :comments, only: [:create]

    resources :users do
      resources :products, only: [:index]
    end

    resources :products do
      resources :comments, only: [:index]
    end

  end

  root "static_pages#root"
end
