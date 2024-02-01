function validateForm() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    if (!email || !password || !confirmPassword) {
        alert("Enter all the fields")
        return
    }    

    if ( password !== confirmPassword) {
        alert("The password does not match one another")
        return
    }

}