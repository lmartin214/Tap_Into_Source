const loginBtn = async function(event){
    event.preventDefault();

    const username = document.querySelector("#username-input-login")
    const password = document.querySelector("#password-input-login")

    const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value,  
        }),
        headers: {
            "Content-Type": "application/json"
        }
     });

     if (response.ok) {
        console.log("profile")
        // redirect to whichever page you want to after you sign up //
     }
     else {
        alert("failed to sign up")
     }
 }
document.querySelector('#login-form').addEventListener("login", loginBtn)