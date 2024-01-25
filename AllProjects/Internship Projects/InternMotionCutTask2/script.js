function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Simple password strength check (at least 6 characters)
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    // If all validations pass, show the confirmation message
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
  }
  