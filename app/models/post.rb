class Post < ApplicationRecord
    validates :title, presence: true
    validates :notes, presence: true
    validates :media_type, presence: true
end
