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
    end
  end

end
