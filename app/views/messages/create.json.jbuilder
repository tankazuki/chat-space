json.name  @message.user.name
json.image @message.image
json.body  @message.body
json.date  @message.created_at.to_s(:default)
