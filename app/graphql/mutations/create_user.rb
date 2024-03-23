module Mutations
    class CreateUser < BaseMutation
        argument :name, String, required: true
        argument :email, String, required: true

        field :errors, [String], null: false

        type Types::UserType

        def resolve(name:, email:)
          User.create!(name: name, email: email)
        end
    end
end