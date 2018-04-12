$(document).ready(function(){
$("#btn_signup").on('click',function(){

  var data=$('#signup form').serialize();
  $.ajax({
    url:'/signup',
        method:'post',
      data:data,
    success:function(){window.location.href='/home'},
    error:function(json){
      console.log(json);
      $('#error').text(json.responseJSON.message.message);
    }
  });
});
$("#btn_login").on('click',function(){

  var data=$('#login form').serialize();
  $.ajax({
    url:'/login',
        method:'post',
      data:data,
    success:function(){window.location.href='/home'},
    error:function(json){
      console.log(json);
      $('#error').text('wrong email and password');
    }
  });
});
});
