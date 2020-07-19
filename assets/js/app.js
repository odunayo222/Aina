let customer_data = [];
// let btn = document.getElementById("submit").addEventListener("click", function(event){
//           event.preventDefault(); 
//     });

const signup = () => {
    let customer_password = document.getElementById("password").value;
    let customer_email = document.getElementById("mail").value;
    let customer_telephone = document.getElementById("telephone").value;
    let customer_username = document.getElementById("user_name").value;
    customer_data.push(customer_username, customer_email, customer_telephone,customer_password);
    console.log(customer_data); 
    // localStorage.setItem(customer_data.keys(), JSON.stringify(customer_data));
    localStorage.setItem('username', 'dummy');
    localStorage.setItem('telephone', '008202');
    

    if(customer_password == "" && customer_telephone == "" && customer_username == "" && customer_email == "") {
        alert("Dear customer, kindly fill out all fields")
    } else if(customer_password.length < 8 ) {
        alert("Password not strong enough");
    } else if(customer_telephone.length !== 11) {
        alert("Invalid Phone number");
    } else{
        alert("Dear customer " + customer_username + ", you have successfully registered with Aina kitchen. You can now make your orders");
    }


    const pwdError = () => {
        if(customer_password.length > 8) {
            document.getElementById("pwd-error").innerHTML = `<b style="color: green; padding: 10px; text-align: center;">Password Strong enough</b>`
        } else{
            document.getElementById("pwd-error").innerHTML = `<b style="color: red;">Password not strong enough</b>`
        }
    } 
    pwdError();

    const telephoneError = () => {
        if(customer_telephone.length == 11) {
            document.getElementById("tel-error").innerHTML = `<b style="color: green; padding: 10px; text-align: center;">Valid Phone Number</b>`
        } else{
            document.getElementById("tel-error").innerHTML = `<b style="color: red;">Invalid Phone number</b>`
        }
    }
    telephoneError();
}
const login = () => {
    let username = document.getElementById("lnames").value;
    let password = document.getElementById("lpassword").value;
    let telephone = document.getElementById("ltelephone").value;
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('telephone'));

    if (username == localStorage.getItem(customer_data.keys(), customer_data[0]) && password == localStorage.getItem(customer_data.keys(), customer_data[3]) && telephone in localStorage.getItem(customer_data.keys(), customer_data[2])) {
        alert("Welcome " + username + " to Aina Kitchen. You can make your order");
    } else{
        alert("Account not registered. Please signup");
    }
}
login();


    

    // if('serviceWorker' in navigator){
//     navigator.serviceWorker.register("./sw.js")
//     .then(() => console.log('Service worker is registered'))
//     .catch(() => console.log('Service worker is not registered'))
// }

// or this method
window.addEventListener('load', () =>{
    // if('serviceWorker' in navigator){
    //     navigator.serviceWorker.register("./sw.js")
    //     console.log('Service worker is registered')
    // } else{
    //     console.log('Service worker is not registered')
    // }
})