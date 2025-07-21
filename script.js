let nameError = document.getElementById("name-error");
let mobileError = document.getElementById("mobile-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
   let nameVal = document.getElementById("fullname").value;
   if(nameVal.length == 0)
   {
     nameError.innerHTML = 'Enter your full name';
     return false;
   }

   if (!nameVal.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = 'Invalid name format';
    return false;
  }

  nameError.innerHTML =' <i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateNo(){
   let phoneNo = document.getElementById("mobile").value;
   if(phoneNo.length == 0)
   {
     mobileError.innerHTML = 'Enter your 10-dgits Phone no';
     return false;
   }

    if(phoneNo.length != 10)
   {
     mobileError.innerHTML = 'Enter your 10-digits Phone no';
     return false;
   }

   if (!phoneNo.match(/^[0-9]{10}$/)) {
    mobileError.innerHTML = 'Invalid Mobile No format';
    return false;
  }

  mobileError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validateEmail(){
   let email = document.getElementById("email").value;
   if(email.length == 0)
   {
     emailError.innerHTML = 'Enter valid email address';
     return false;
   }

   if (!email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
    emailError.innerHTML = 'Invalid email format';
    return false;
  }

  emailError.innerHTML =' <i class="fa-solid fa-circle-check"></i>';

  return true;
}


function validateMessage(){
   let message = document.getElementById("message").value;
   let required = 30;
   let left = required-message.length;
   while(left > 0)
   {
     messageError.innerHTML = left + " letters are required";
     return false;
   }

  messageError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';

  return true;
}

function formSubmit(){
  if(!validateName() || !validateNo() || !validateEmail() || !validateMessage())
  {
      submitError.innerHTML = 'Please check the input fields';

      return false;
  }
  submitError.innerHTML = 'Form Submitted';
  return true;
}

let form = document.getElementById("contactForm");
form.addEventListener('submit',function(e){
  e.preventDefault();
  let nameVal = document.getElementById("fullname").value;
  let phoneNo = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  const formData = {
    nameVal,phoneNo,email,message
  };

  localStorage.setItem('userFormData', JSON.stringify(formData));

});

