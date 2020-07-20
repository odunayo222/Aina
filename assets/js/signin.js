// assign variable declaration
const handleSignin =  document.getElementById('handleSignin');
const lnames = document.getElementById("lnames");
const lpassword = document.getElementById("lpassword");
const ltelephone = document.getElementById("ltelephone");

// get values from localstorage using key names
const username = localStorage.getItem('username');
const telephone = localStorage.getItem('telephone');
const password = localStorage.getItem('password');


// event handler/function to handle login
handleSignin.addEventListener('submit', (e) => {
  e.preventDefault();
  // check if there is no input entered from user
  if(lnames.length <= 0 || lpassword.length <= 0 || ltelephone.length <= 0){
    alert('All fields are required');
  }
  if (lnames.value != username || lpassword.value != password || ltelephone.value != telephone){
    alert('Incorrect credentials');
  }
  if (lnames.value == username && lpassword.value == password && ltelephone.value == telephone){
    lnames.value = '';
    lpassword.value = '';
    ltelephone.value = '';
    location.href = './dashboard.html'; 
  }

})