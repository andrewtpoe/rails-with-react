module Api
  module V1
    class PostsPresenter
      def self.call(*args)
        new(*args).call
      end

      def initialize(posts)
        @posts = posts
      end

      def call
        {
          posts: build_posts
        }
      end

      private

      attr_reader :posts

      def build_posts
        posts.map do |post|
          build_post(post)
        end
      end

      def build_post(post)
        {
          title: post.title,
          body: post.body
        }
      end
    end
  end
end
