class Api::V1::CustomerPaymentTypesController < ApplicationController
  before_action :set_customer_payment_type, only: [:show, :update, :destroy]
  respond_to :json

  def index
    customer_payment_types = CustomerPaymentType.all
    render json: {
      customer_payment_types: customer_payment_types
    }, status: :ok
  end

  def show
    render json: {
      customer_payment_type: @customer_payment_type
    }, status: :ok
  end

  def create
    new_bank = CustomerPaymentType.new(customer_payment_type_params)
    new_bank.save! ? success_response(new_bank,"create") : error_response(new_bank,"create")
  end

  def update
    @customer_payment_type.update!(customer_payment_type_params) ? success_response(@customer_payment_type,"update") : error_response(@customer_payment_type,"update")
  end

  def destroy
    @customer_payment_type.destroy! ? success_response(@customer_payment_type,"destroy") : error_response(@customer_payment_type,"destroy")
  end

  private
    def set_customer_payment_type
      @customer_payment_type = CustomerPaymentType.find(params[:id])
    end

    def customer_payment_type_params
      params.require(:customer_payment_type).permit(:name, :description)
    end
end