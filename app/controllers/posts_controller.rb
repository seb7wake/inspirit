class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def new 
    # instantiate a new post object but does not save it
    @post = Post.new
  end

  def create
    @post = Post.new(title: params[:post][:title], notes: params[:post][:notes], link: params[:post][:link], media_type: params[:post][:media_type])
    if @post.save
      redirect_to post_path(@post)
    else
      render :new, status: :unprocessable_entity
    end
  end
end
