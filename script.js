document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;
  let error = document.getElementById("error");

  if(name === "" || email === "" || msg === ""){
    error.textContent = "⚠️ All fields are required!";
    error.style.color = "red";
  }else{
    error.textContent = "Message Sent Successfully!";
    error.style.color = "lightgreen";
    this.reset();
  }
});
