$('#osForm').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "telegram.php",
      type: "POST",
      data: $('#osForm').serialize(),
      success: function(response) {
        //обработка успешной отправки
      },
      error: function(response) {
        //обработка ошибок при отправке
     }
    });
});