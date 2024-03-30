var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elText = document.querySelector(".text");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var input = elFormInput.value.trim()

  console.log(input);

  elText.textContent = input;
});
