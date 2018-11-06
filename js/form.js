var formToCheck = function (item) {
var uploadFormHashtag = document.querySelector(item);
uploadFormHashtag.addEventListener('invalid', function (evt){
  if (uploadFormHashtag.validity.valueMissing) {
    uploadFormHashtag.setCustomValidity('Обязательное поле');
  } else {
      if (item === '.form__input-client-data--email') {
        if (uploadFormHashtag.validity.patternMismatch) {
          uploadFormHashtag.setCustomValidity('Пожалуйста введите e-mail в формате "example@mail.ru"');
        }
      } else
         if (item === '.form__input-client-data--phone') {
           if (uploadFormHashtag.validity.patternMismatch) {
            uploadFormHashtag.setCustomValidity('Пожалуйста введите телефон в формате "+7 XXX ХХХ XX XX"');
           }
         } else
            if (uploadFormHashtag.validity.patternMismatch) {
              uploadFormHashtag.setCustomValidity('Пожалуйста введите буквы латинского или русского алфавита');
            } else
                 {
    uploadFormHashtag.setCustomValidity('');
  }
  }
})
};
formToCheck('.form__input-client-data');
formToCheck('.form__input-client-data--email');
formToCheck('.form__input-client-data--phone');
