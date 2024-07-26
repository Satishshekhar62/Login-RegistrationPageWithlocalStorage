document.getElementById("register-form").addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if(username && password){
        localStorage.setItem(username, password);
        alert("Registration successful");
    }
    else{
        alert('Please enter a username and password');
    }
});

document.getElementById("login-form").addEventListener('submit', function(e){
          e.preventDefault();
          const username = document.getElementById("login-username").value;
          const password = document.getElementById("login-password").value;

          const storedPassword = localStorage.getItem(username);
          if(storedPassword && storedPassword === password){
            alert("Login successful");
          }
          else
          {
            alert('Invalid username or password');
          }
});