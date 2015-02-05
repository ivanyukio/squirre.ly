class Tree < ActiveRecord::Base
  has_many :branches
  has_many :nuts
  has_many :squirrels, through: :branches
end
