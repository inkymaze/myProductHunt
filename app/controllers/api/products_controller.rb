class Api::ProductsController < ApplicationController

  before_action :require_signed_in!, only: [:create]



  def create
    @product = Product.new(product_params)
    @product.hunter_id = current_user.id
    if @product.save
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])
    render "api/products/show"
  end

  def index
    @products = Product.all
    render "api/products/index"
  end


  private

  def product_params
    params.require(:product).permit(:name, :desc, :image_url, :product_url)
  end
end
