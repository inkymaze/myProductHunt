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
    @product = Product.find_by_id(params[:id])
    render "api/products/show"
  end

  def index
    if !params[:user_id]
      @products = Product.all
    else 
      @products = Product.where("hunter_id = ?", params[:user_id]);
    end
    render "api/products/index"
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :image_url, :product_URL,
     :image_two_url, :image_three_url, :image_four_url, :image_five_url)
  end
end
