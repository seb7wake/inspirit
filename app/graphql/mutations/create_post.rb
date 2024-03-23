module Mutations
    class CreatePost < BaseMutation
        argument :title, String, required: true
        argument :notes, String, required: true
        argument :media_type, String, required: true
        argument :author, ID, required: true

        field :errors, [String], null: false

        type Types::PostType

        def resolve(title:, notes:, media_type:, author:)
          user = User.find(author.to_i)
          Post.create!(title: title, notes: notes, media_type: media_type, author: user)
        end
    end
end