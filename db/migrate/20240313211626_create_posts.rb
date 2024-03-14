class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.text :notes
      t.string :title
      t.text :link
      t.string :media_type

      t.timestamps
    end
  end
end
