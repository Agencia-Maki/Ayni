class Api::V1::BanksController < ApplicationController
  before_action :set_bank, only: [:show, :update, :destroy]
  respond_to :json

  def index
    banks = Bank.where.not(slug: "S/A")
    render json: {
      banks: banks.map do |bank| {
        id: bank.id,
        name: bank.name,
        slug: bank.slug,
        total_users: bank.personal_records.count
      }
      end
    }, status: :ok
  end

  def show
    render json: {
      bank: @bank
    }, status: :ok
  end

  def create
    new_bank = Bank.new(bank_params)
    new_bank.save! ? success_response(new_bank,"create") : error_response(new_bank,"create")
  end

  def update
    @bank.update!(bank_params) ? success_response(@bank,"update") : error_response(@bank,"update")
  end

  def destroy
    @bank.destroy! ? success_response(@bank,"destroy") : error_response(@bank,"destroy")
  end

  private
    def set_bank
      @bank = Bank.find(params[:id])
    end

    def bank_params
      params.require(:bank).permit(:name, :slug)
    end

end