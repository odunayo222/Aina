const handleSignup =  document.getElementById('handleSignup');
const password = document.getElementById("password");
const email = document.getElementById("mail");
const telephone = document.getElementById("telephone");
const username = document.getElementById("user_name");

const storedUsername = localStorage.getItem('username');
const storedEmail = localStorage.getItem('email');

handleSignup.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!username.value || !email.value || !telephone.value || !password.value) {
    // validation to check if nothing is entered before submitting
    document.getElementById("error").innerHTML = `<b style="color: red;">Values are required</b>`
  } 
  else if(password.value.length < 8){
    document.getElementById("psd-error").innerHTML = `<b style="color: red;">Password must be at least 8 characters</b>`
  }
  else if(telephone.value.length < 11) {
    document.getElementById("tel-error").innerHTML = `<b style="color: red;">Telephone number must be at least 11 numbers</b>`
  } else if(telephone.value.length > 14) {
    document.getElementById("tel-error").innerHTML = `<b style="color: red;">Telephone number must not be more than 14 numbers</b>`
  } else if(storedUsername === username.value) {
      document.getElementById("u-error").innerHTML = `<b style="color: red;">Username taken</b>`
  } else if (storedEmail === email.value) {
    document.getElementById("e-error").innerHTML = `<b style="color: red;">Email used</b>`
  }
  else {
    alert("Account created successfully. Login to make your orders");
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value)
    localStorage.setItem('telephone', telephone.value);
    localStorage.setItem('password', password.value);
     document.getElementById("success").innerHTML = `<b style="color: green;">Account created successfully. Login to make your orders</b>`
    username.value = '';
    email.value = '';
    telephone.value = '';
    password.value = '';
   
  }

})
