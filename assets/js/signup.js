const handleSignup =  document.getElementById('handleSignup');
const password = document.getElementById("password");
const email = document.getElementById("mail");
const telephone = document.getElementById("telephone");
const username = document.getElementById("user_name");

handleSignup.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!username.value || !email.value || !telephone.value || !password.value) {
    // validation to check if nothing is entered before submitting
    console.log('values are required');
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value)
    localStorage.setItem('telephone', telephone.value);
    localStorage.setItem('password', password.value);
    alert('Account created successfully');
    username.value = '';
    email.value = '';
    telephone.value = '';
    password.value = '';
    window.location.href = './sdashboard.html';
  }

})