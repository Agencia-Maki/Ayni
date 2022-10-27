module Users
  class AuthenticationController < ApiGuard::AuthenticationController
    before_action :find_resource, only: [:create]
    before_action :authenticate_resource, only: [:destroy]

    def create
      if resource.authenticate(params[:password])
        create_token_and_set_header(resource, resource_name)
        render json: {
          message: "Bienvenido a Ayni",
          access_token: response.headers['Access-Token'],
          refresh_token: response.headers['Refresh-Token'],
          user: resource,
          rol: resource.rol ? resource.rol : nil,
        }, status: :ok
      else
        render_error(422, message: I18n.t('api_guard.authentication.invalid_login_credentials'))
      end
    end

    def destroy
      blacklist_token
      render_success(message: I18n.t('api_guard.authentication.signed_out'))
    end

    private

    def find_resource
      self.resource = resource_class.where("document_number=?", params[:login]).first if params[:login].present?
      render_error(422, message: I18n.t('api_guard.authentication.invalid_login_credentials')) unless resource
    end
  end
end