class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :img_id
      t.string :url
      t.integer :likes

      t.timestamps
    end
  end
end
