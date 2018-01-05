# README

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :members
- has_many :messages


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true, unique: true|

### Association
- has_many :users, through: :members
- has_many :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||

### Association
- belongs_to :group
- belongs_to :user
