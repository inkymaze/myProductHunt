class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

    def show
     @user = User.find_by_id(params[:id])

     if @user
       render '/api/users/show'
     else
       render( json:["User not found"], status: 404 )
     end
   end

   def update
    @user = User.find_by_id(params[:id])

    if @user && @user.username == current_user.username
      if @user.update_attributes(user_params)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render( json:["Update Failed"], status: 403 )
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :image_url)
  end
end
