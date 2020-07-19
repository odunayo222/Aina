window.addEventListener('load', () => {
  // assign variable to display user data dynamically
  const dynamicUsername = document.getElementById('dynamic_username');
  const dynamic_tel = document.getElementById('dynamic_tel');

  // get the values from localstorage and store in a variable
  // using the key names
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const telephone = localStorage.getItem('telephone');
  const password = localStorage.getItem('password');

  // check if localstorage has keys with values of
  // username, email, telephone and password
  if (username === null && email === null && telephone === null && password === null){
    // if it does not have send user back to login
    window.location.href = './login.html';
  }else{
    // if it has update dashboard page dynamically from the values gotten
    dynamicUsername.textContent = JSON.parse(username);
    dynamic_tel.textContent = JSON.parse(telephone);
  }
})