const address = document.querySelector('#address');
const handleProfile = document.querySelector('#handleProfile');

window.addEventListener('load', () => {
  // assign variable to display user data dynamically
  const dynamicUsernameLg = document.getElementById('dynamic_username-lg');
  const dynamicUsernameSm = document.getElementById('dynamic_username-sm');
  const dynamic_telLg = document.getElementById('dynamic_tel-lg');
  const dynamic_telSm = document.getElementById('dynamic_tel-sm');
  const dynamic_emailLg = document.querySelector("#dynamic_email-lg");
  const dynamic_emailSm = document.querySelector("#dynamic_email-sm");
  const dynamic_addressLg = document.getElementById('dynamic_address-lg');
  const dynamic_addressSm = document.getElementById('dynamic_address-sm');

  // get the values from localstorage and store in a variable
  // using the key names
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const telephone = localStorage.getItem('telephone');
  const password = localStorage.getItem('password');
  const address = localStorage.getItem('address');


  // check if localstorage has keys with values of
  // username, email, telephone and password
  if (username === null && email === null && telephone === null && password === null){
    // if it does not have send user back to login
    window.location.href = './login.html';
  }else{
    // if it has update dashboard page dynamically from the values gotten
    dynamicUsernameLg.textContent = username;
    dynamicUsernameSm.textContent = username;
    dynamic_telLg.textContent = telephone;
    dynamic_telSm.textContent = telephone;
    dynamic_addressLg.textContent = address;
    dynamic_addressSm.textContent = address;
    

  }
});

handleProfile.addEventListener('submit', function(e){
  e.preventDefault();
  if(address.length <= 0){
    alert('Please enter your address');
  }else{
    localStorage.setItem('address', address.value);
    location.reload();
  }
})
dynamic_email.addEventListener('load', function () {
  dynamic_email.textContent = email;
})