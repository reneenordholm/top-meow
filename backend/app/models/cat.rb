class Cat < ApplicationRecord
    validates :img_id, uniqueness: true
end
