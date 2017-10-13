class Api::CommentsController < ApplicationController

  before_action :require_signed_in!, only: [:create]

  def index
    @comments = Comment.where('product_id = ?', params[:product_id])
    render '/api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.hunter_id = current_user.id
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:hunter_id, :product_id, :body)
  end
end
