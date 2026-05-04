// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//tax switch
let taxSwitch = document.getElementById("switchCheckDefault");
taxSwitch.addEventListener("change",()=>{
  let prices = document.getElementsByClassName("price");
  let taxInfo = document.getElementsByClassName("tax-info");

  for(let i = 0; i < prices.length; i++){
    let priceElement = prices[i];
    let basePrice = Number(priceElement.getAttribute("data-price"));
    if (taxSwitch.checked) {
      let newPrice = basePrice * 1.18;
      priceElement.innerText = newPrice.toLocaleString("en-IN");
      taxInfo[i].style.display = "inline";
    } else {
      priceElement.innerText = basePrice.toLocaleString("en-IN");
      taxInfo[i].style.display = "none";
    }
  }
})