$(function(){
　function buildHTML(message){
    var post_image = "";
    if (message.image) {
      post_image = `<img src="${ message.image }">`;
    }
    var html = ` <div class = "chat-main__body__message-name">
                  ${message.name}
                 </div>
                 <div class = "chat-main__body__message-date">
                  ${message.date}
                 </div>
                 <div class = "chat-main__body__message-body">
                  <p>${message.body}</p>
                  ${ post_image }
                 </div>
               </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__body').append(html);
      $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight}, "fast");
      $('.input-form').val('');
      $('.send--btn').removeAttr("disabled");
    })
　　　.fail(function(){
    　alert('error');
     $('.send--btn').removeAttr("disabled");
    })
  })
})
