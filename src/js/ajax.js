$('#osForm').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "telegram.php",
      type: "POST",
      data: $('#osForm').serialize(),
      success: function(response) {
         $('#result_form').html('Thank you for your order.');
      },
      error: function(response) {
         $('#result_form').html('Thank you for your order.');
     }
    });
});