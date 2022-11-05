class Api::V1::AreasController < ApplicationController
  before_action :set_bank, only: [:show, :update, :destroy]
  respond_to :json

  def index
    areas = Area.all
    render json: {
      areas: areas.map do |area| {
        id: area.id,
        name: area.name,
        slug: area.slug,
      }
      end
    }, status: :ok
  end

  def show
    render json: {
      area: @area
    }, status: :ok
  end

  def create
    new_area = Area.new(area_params)
    new_area.save! ? success_response(new_area,"create") : error_response(new_area,"create")
  end

  def update
    @area.update!(area_params) ? success_response(@area,"update") : error_response(@area,"update")
  end

  def destroy
    @area.destroy! ? success_response(@area,"destroy") : error_response(@area,"destroy")
  end

  private
    def set_area
      @area = Area.find(params[:id])
    end

    def area_params
      params.require(:area).permit(:name, :slug)
    end

end