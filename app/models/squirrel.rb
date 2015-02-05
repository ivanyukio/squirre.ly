class Squirrel < ActiveRecord::Base
  has_many :branches
  has_many :nuts
  has_many :trees, through: :branches
end
