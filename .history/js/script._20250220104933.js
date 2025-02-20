(() => {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  
  /////////////////////////////////////
  var regex = /^\d{12,18}$/;
  $("#payment-form").on("submit", function (e) {
    var ctNumber = $(this).find('input[name="number8"]');
    var currentVal = $(ctNumber).val();
    if (!regex.test(currentVal)) {
      $(ctNumber).addClass("invalid");
      e.preventDefault();
    }
    // тут добавить текст ошибки или вызвать другое событие или еще что-то
    e.preventDefault(); // это убрать
  });
  $('#payment-form input[name="Number"]').on("input", function (e) {
    if ($(this).hasClass("invalid")) $(this).removeClass("invalid");
  });
  