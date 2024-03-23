class Post < ApplicationRecord
    belongs_to :author, class_name: 'User', foreign_key: 'user_id'
    validates :title, presence: true
    validates :notes, presence: true
    validates :media_type, presence: true
end
