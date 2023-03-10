//form validation
function validateForms(form) {
  $(form).validate({
    rules: {
      phone: {
        required: true,
        minlength: 9
      },
      email: {
        required: true,
        email: true,
      },
      privacypolicy: "required"
    },
    messages: {
      phone: "To pole jest wymagane",
      email: "Należy wpisać prawidłowy e-mail",
      privacypolicy: "To pole jest wymagane",
    }
  });
};
validateForms('#contactform');


//phone mask input 
$('input[name=phone]').mask("+48 (999) 999-999");

//form sending
$('form').submit(function (e) {
  e.preventDefault();

  if (!$(this).valid()) {
    return;
  }

  $.ajax({
    type: "POST",
    url: "assets/PHPMailer/smart.php",
    data: $(this).serialize()
  }).done(function () {
    $(this).find("input").val("");
    $(this).find(":radio").prop("disabled", true);
    $('.overlay, #thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
  return false;
});

//modal close
(function ($) {
  $('.modal__close').on('click', function () {
    $('.overlay, #thanks').fadeOut('slow');
    $('body').css('overflow', "scroll");
  });
})(jQuery);

(function ($) {
  $('.overlay').on('click', function () {
    $('.overlay, #thanks').fadeOut('slow');
    $('body').css('overflow', "scroll");
  });
})(jQuery);