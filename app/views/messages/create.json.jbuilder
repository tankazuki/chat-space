json.name  @message.user.name
json.image @message.image.url
json.body  @message.body
json.date  @message.created_at.to_s(:default)
json.id    @message.id
