class Api::UpvotesController < ApplicationController

  before_action :require_signed_in!, only: [:create]
  
  def create
    @upvote = Upvote.new(upvote_params)
    @upvote.hunter_id = current_user.id
    if @upvote.save
      render 'api/upvotes/show'
    else
      render @upvote.errors.full_messages, status: 422
    end
  end

  private

  def upvote_params
    params.require(:upvote).permit(:hunter_id, :product_id)
  end
end
