class Api::SearchController < ApplicationController

  def index
    @products = Product.search(params[:query])
    render 'api/products/index'
  end

end
