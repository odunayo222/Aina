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
  if (!lnames.value || !ltelephone.value || !lpassword.value) {
    console.log('values are required');
  } else if(JSON.stringify(lnames.value) !== username && JSON.stringify(telephone.value) !== telephone && JSON.stringify(password.value) !== password){
    // check if what the user entered does not matches
    //  what is been stored on localstorage
    alert('Account not registered with Aina Kitchen. Please signup');
  } else{
    // if what the user matches redirect the user to dashboard page
    lnames.value = '';
    telephone.value = '';
    password.value = '';
    window.location.href = './dashboard.html';
  }

})