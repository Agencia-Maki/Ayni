class Api::V1::CustomersController < ApplicationController
  before_action :set_customer, only: [:show, :update, :destroy]
  respond_to :json

  def index
    customers = Customer.all
    render json: {
      customers: customers.map do |customer| {
        id: customer.id,
        document_type: customer.document_type,
        full_name: customer.full_name,
        full_address: customer.address,
        contact_phone: customer.contact_phone,
        payment_type_name: customer.payment_type_name,
        contry: customer.contry,
        contry_code: customer.contry_code,
        document_number: customer.document_number,
        customer_payment_type_id: customer.customer_payment_type_id,
        total_users: customer.personal_records.count
      }
      end
    }, status: :ok
  end

  def show
    render json: {
      customer: @customer
    }, status: :ok
  end

  def create
    new_customer = Customer.new(customer_params)
    new_customer.save! ? success_response(new_customer,"create") : error_response(new_customer,"create")
  end

  def update
    @customer.update!(customer_params) ? success_response(@customer,"update") : error_response(@customer,"update")
  end

  def destroy
    @customer.destroy! ? success_response(@customer,"destroy") : error_response(@customer,"destroy")
  end

  private
    def set_customer
      @customer = Customer.find(params[:id])
    end

    def customer_params
      params.require(:customer).permit(:full_name,
                                       :full_address,
                                       :contact_phone,
                                       :payment_type_name,
                                       :contry,
                                       :contry_code,
                                       :document_number,
                                       :customer_payment_type_id)
    end

end