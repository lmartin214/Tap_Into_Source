const signUpForm = async function(event){
    event.preventDefault()
    const username = document.querySelector("#username-input-signup")
    const password = document.querySelector("#password-input-signup")

    const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value,  
        }),
        headers: {
            "Content-Type": "application/json"
        }
     })
     if (response.ok) {
        console.log("signed up")
        // redirect to whichever page you want to after you sign up //
     }
     else {
        alert("failed to sign up")
     }
}

document.querySelector('#signup-form').addEventListener("submit", signUpForm)