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
     nameError.style.color = "red";
     return false;
   }

   if (!nameVal.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = 'Invalid name format';
    nameError.style.color = "red";
    return false;
  }

  nameError.innerHTML =' <i class="fa-solid fa-circle-check"></i>';
  nameError.style.color = "green";
  return true;
}

function validateNo(){
   let phoneNo = document.getElementById("mobile").value;
   if(phoneNo.length == 0)
   {
     mobileError.innerHTML = 'Enter your 10-dgits Phone no';
     mobileError.style.color = "red";
     return false;
   }

    if(phoneNo.length != 10)
   {
     mobileError.innerHTML = 'Enter your 10-digits Phone no';
     mobileError.style.color = "red";
     return false;
   }

   if (!phoneNo.match(/^[0-9]{10}$/)) {
    mobileError.innerHTML = 'Invalid Mobile No format';
    mobileError.style.color = "red";
    return false;
  }

  mobileError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  mobileError.style.color = "green";
  return true;
}


function validateEmail(){
   let email = document.getElementById("email").value;
   if(email.length == 0)
   {
     emailError.innerHTML = 'Enter valid email address';
     emailError.style.color = "red";
     return false;
   }

   if (!email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
    emailError.innerHTML = 'Invalid email format';
    emailError.style.color = "red";
    return false;
  }

  emailError.innerHTML =' <i class="fa-solid fa-circle-check"></i>';
  emailError.style.color = "green";

  return true;
}


function validateMessage(){
   let message = document.getElementById("message").value;
   let required = 30;
   let left = required-message.length;
   if(left > 0)
   {
     messageError.innerHTML = left + " letters are required";
     messageError.style.color = "red";
     return false;
   }

  messageError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
  messageError.style.color = "green";

  return true;
}

function formSubmit(){
  if(!validateName() || !validateNo() || !validateEmail() || !validateMessage())
  {
      submitError.innerHTML = 'Please check the input fields';
      submitError.style.color = "red";

      return false;
  }
  submitError.innerHTML = 'Form Submitted  <i class="fa-solid fa-circle-check"></i> ';
  submitError.style.color = "green";
  return true;
}

let form = document.getElementById("contactForm");
form.addEventListener('submit',function(e){
  e.preventDefault();
  let Name = document.getElementById("fullname").value;
  let phoneNo = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  const formData = {
    Name,phoneNo,email,message
  };

  localStorage.setItem('userFormData', JSON.stringify(formData));

});

