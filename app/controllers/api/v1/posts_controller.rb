module Api
  module V1
    class PostsController < ApplicationController
      def index
        posts = Post.all
        render json: Api::V1::PostsPresenter.call(posts)
      end

      def show
      end

      def create
      end

      def update
      end

      def destroy
      end
    end
  end
end
