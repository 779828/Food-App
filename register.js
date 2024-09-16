function printInput(event) {

    event.preventDefault()
  
    var fname = document.getElementById("fname").value;
  
    var lname = document.getElementById("lname").value;
  
    var email = document.getElementById("email").value;
  
    var password = document.getElementById("password").value;
  
    localStorage.setItem("User", fname);
    localStorage.setItem("Password", password);

    window.location.href = "random.html";

    // document.write("Your First Name is : " + fname + "<br>");
  
    // document.write("Your Last Name is : " + lname + "<br>");
  
    // document.write("Your Email is : " + email + "<br>");
  
    // document.write("Your Password is : " + password + "<br>");
  
}