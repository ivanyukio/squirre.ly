class CreateBranches < ActiveRecord::Migration
  def change
    create_table :branches do |t|
      t.references  :squirrel
      t.references  :tree
      t.boolean     :is_primary
    end
  end
end
