function checkCustomRadio() {
  const customRadio = document.querySelector('#customAmountRadio');
  const customAmountInput = document.querySelector('#customAmountInput');
  if (customRadio.checked) {
    customAmountInput.required = true;
  } else {
    customAmountInput.required = false;
    customAmountInput.value = null;
  }
}
let customBudgetfield = document.getElementById('customAmountInput');
customBudgetfield.addEventListener('click', function () {
  let customAmountRadio = document.getElementById('customAmountRadio');
  customAmountRadio.checked = true;
});
