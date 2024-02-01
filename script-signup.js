function signUp() {
    let firstname = document.getElementById("firstname").value 
    let secondname = document.getElementById("secondname").value
    let email = document.getElementById("email").value 
    let password = document.getElementById("password").value 

    if (!firstname || !secondname || !email || !password) {
        alert("Please enter all the fields")
        return
    }

    localStorage.setItem("firstname", firstname)
    localStorage.setItem("secondname", secondname)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    window.location.href = "index.html"

    alert("Thank you for sign up")

}