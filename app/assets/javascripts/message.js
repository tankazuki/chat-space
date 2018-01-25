$(function(){ 
  
　function buildHTML(message){
    var post_image = "";
    if (message.image) {
      post_image = `<img src="${ message.image }">`;
    }
    var html = ` <div class = "chat-main__body__message "data-message-id = "${message.id}">
                 <div class = "chat-main__body__message-name">
                  ${message.name}
                 </div>
                 <div class = "chat-main__body__message-date">
                  ${message.date}
                 </div>
                 <div class = "chat-main__body__message-body">
                  <p>${message.body}</p>
                  ${ post_image }
                 </div>
                 </div>
                 </div>
                 </div>`
    return html;
           }
   var interval = setInterval(function() {
    if (window.location.href.match("\/groups\/.\/messages")) {
    $.ajax({
      url: location.href,
      type: "GET",
      dataType: 'json'
    })
    .done(function(json) {
      var id = $('.chat-main__body__message').last().data('messageId');
        var insertHTML = '';
        json.messages.forEach(function(message) {
          if (message.id > id ) {
             insertHTML += buildHTML(message);
        
          } 
          
        });
        $('.chat-main__body').append(insertHTML);
      })
      .fail(function(json) {
          alert('自動更新に失敗しました');
      });
      }else {
        clearInterval(interval);
       }
     },5000 );

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
  });
});
