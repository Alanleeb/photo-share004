class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.datetime :date
      t.string :email
      t.string :photo
      t.string :status
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
