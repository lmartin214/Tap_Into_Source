const loginBtn = async function(event){ //function that is used to log a user into an application
    event.preventDefault();
    console.log(event)
    const username = document.querySelector("#username-input-login") //grabs both username and passowrd input 
    const password = document.querySelector("#password-input-login")

    const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({//It then makes a POST request to the API with the username and password and stores the response
            username: username.value,
            password: password.value,  
        }),
        headers: {
            "Content-Type": "application/json"
        }
     });
    console.log(response)
    var data = await response.json()
    console.log(data)
     if (response.ok) {//checks if the response is valid, and if it is, redirects the user to their profile page
        console.log("profile")
        document.location.replace('/profile');
     }
     else {
        alert("failed to sign up")
     }
 }
document.querySelector('#login-form').addEventListener("submit", loginBtn)