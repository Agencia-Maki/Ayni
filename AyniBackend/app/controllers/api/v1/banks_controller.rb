class Api::V1::BanksController < ApplicationController
  before_action :set_bank, only: [:show, :update]
  respond_to :json

  def index
    banks = Bank.all
    render json: {
      banks: banks
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

  private
    def set_bank
      @bank = Bank.find(params[:id])
    end

    def bank_params
      params.require(:bank).permit(:name, :slug)
    end

end