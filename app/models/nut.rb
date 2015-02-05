class Nut < ActiveRecord::Base
  belongs_to :squirrel
  belongs_to :tree
end
