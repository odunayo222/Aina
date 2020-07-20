const address = document.querySelector('#address');
const handleProfile = document.querySelector('#handleProfile');

window.addEventListener('load', () => {
  // assign variable to display user data dynamically
  const dynamicUsername = document.getElementById('dynamic_username');
  const dynamic_tel = document.getElementById('dynamic_tel');
  const dynamic_address = document.getElementById('dynamic_address');


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
    dynamicUsername.textContent = username;
    dynamic_tel.textContent = telephone;
    dynamic_address.textContent = address;

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