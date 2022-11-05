Rails.application.routes.draw do
  api_guard_routes for: 'users', controller: {
    authentication: 'users/authentication',
    passwords: 'users/passwords',
    tokens: 'users/tokens'
  }

  namespace :api do
    namespace :v1 do
      resources :banks
      resources :customers
      resources :customer_payment_types
      resources :areas
    end
  end

end
