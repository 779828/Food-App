function validateLogin(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var expectedUsername = localStorage.getItem("User");
    var expectedPassword = localStorage.getItem("Password");

    console.log(expectedPassword);
    console.log(expectedUsername);
    
    if (username === expectedUsername && password === expectedPassword) 
    {    
        window.location.href = "todo.html";
    }
    else
    {
        alert("Invalid username or password. Please try again.")
    }
}