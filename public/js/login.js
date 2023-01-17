const loginBtn = async function(event){
    event.preventDefault();
    console.log(event)
    const username = document.querySelector("#username-input-login")
    const password = document.querySelector("#password-input-login")

    const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
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
     if (response.ok) {
        console.log("profile")
        // redirect to whichever page you want to after you sign up //
        document.location.replace('/profile');
     }
     else {
        alert("failed to sign up")
     }
 }
document.querySelector('#login-form').addEventListener("submit", loginBtn)