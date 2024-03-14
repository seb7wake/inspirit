class PostsController < ApplicationController
  # Not needed because I'm using graphql, but keeping for reference
  def index
    posts = Post.all.order(created_at: :desc)
    render json: posts
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post
  end

  def create
    post = Post.create!(post_params)
    if post
      render json: @post
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find_by(id: params[:id])
    # &. avoids nil errors when calling a method (like ?. in js)
    post&.destroy
    render json: { message: 'Recipe deleted!' }
  end

  private
  def post_params
    params.permit(:title, :link, :notes, :media_type)
  end
end
