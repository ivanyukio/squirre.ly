class Squirrel < ActiveRecord::Base
  has_many :branches
  has_many :nuts
  has_many :trees, through: :branches

  def nut_count
    nuts.length
  end

  def tree_count
    trees.length
  end
end
