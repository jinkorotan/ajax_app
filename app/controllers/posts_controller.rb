class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post }
    #8行目では、7行目で定義した変数postの値を、postというキーとセットでJavaScriptに送信
  end
end
