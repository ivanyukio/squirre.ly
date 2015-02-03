class Squirrels < ActiveRecord::Migration
  def change
    create_table :squirrels do |t|
      t.string :name, null: false
      t.integer :tail_length, null: false
      t.string :tree_mail, null: false
    end
  end
end
