   function validation(){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var npassword = document.getElementById("npassword").value;
  var about = document.getElementById("about").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(firstname.length < 5){
    text = "Please Enter valid first-name";
    error_message.innerHTML = text;
    return false;
  }
  if(lastname.length < 5){
    text = "Please Enter valid last-name";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(password.length < 5){
    text = "Please Enter correct Password";
    error_message.innerHTML = text;
    return false;
  }
   if(npassword.length < 5){
    text = "Please Enter Your previous Password";
    error_message.innerHTML = text;
    return false;
  }
  if(about.length <= 70){
    text = "Please Enter More Than 70 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("successfully registered! Welcome to our family ♡");
  return true;
}

 