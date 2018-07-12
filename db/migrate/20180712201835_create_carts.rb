class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.string :price
      t.string :tax
      t.string :total
      t.text :comment

      t.timestamps
    end
  end
end
