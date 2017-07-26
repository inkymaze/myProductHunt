Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show, :update]
    resources :products, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
