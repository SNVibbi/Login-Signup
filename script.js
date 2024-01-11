document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginBtn").addEventListener("click", function() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      console.log(`Username: ${username}, Password: ${password}`); 
    });
});