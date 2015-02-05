class CreateNuts < ActiveRecord::Migration
  def change
    create_table :nuts do |t|
      t.string :flavor, null: false
      t.references :squirrel
      t.references :tree
    end
  end
end
