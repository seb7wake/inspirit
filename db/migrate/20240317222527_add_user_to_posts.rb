class AddUserToPosts < ActiveRecord::Migration[7.1]
  def up
    # Step 1: Add the reference allowing nulls initially
    add_reference :posts, :user, null: true, foreign_key: true

    # Step 2: Assign a default user to existing posts
    # Make sure to replace 'default_user_id' with an actual user ID from your database
    default_user_id = 1
    execute "UPDATE posts SET user_id = #{default_user_id} WHERE user_id IS NULL"

    # Step 3: Change the column to disallow nulls
    change_column_null :posts, :user_id, false
  end

  def down
    # This will remove the column if you roll back the migration
    remove_column :posts, :user_id
  end
end
