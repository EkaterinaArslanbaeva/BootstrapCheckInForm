(function (validateAddress) {
    var address = document.querySelectorAll('.checkValidation')
    Array.prototype.slice.call(address)//checking validation in index.html under checkValidation form
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')//result
        }, 
        false)
      })
  }
  )
  ()